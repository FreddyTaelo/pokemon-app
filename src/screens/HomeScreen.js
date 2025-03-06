import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { getPokemonList } from '../services/api';
import PokemonCard from '../components/PokemonCard';
import styles from '../styles/HomeScreenStyles'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [viewType, setViewType] = useState('grid');

  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(pokemons);
    }
  };
  
  const toggleViewType = () => {
    setViewType((prevType) => (prevType === 'grid' ? 'list' : 'grid'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Pokemon"
          value={search}
          onChangeText={handleSearch}
        />
         <TouchableOpacity onPress={toggleViewType} style={{ padding: 10 }}>
          <Icon 
            name={viewType === 'grid' ? 'th-list' : 'th'}
            size={30} 
            color="black" 
          />
        </TouchableOpacity>
      </View>

      {filteredPokemons.length === 0 ? (
        <Text style={styles.noData}>No Pokemon found. Try another search.</Text>
      ) : (
        <FlatList
          data={filteredPokemons}
          key={viewType}
          keyExtractor={(item) => item.id.toString()}
          numColumns={viewType === 'grid' ? 2 : 1}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              viewType={viewType}
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

export default HomeScreen;
