import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import { getPokemonList } from '../services/api';
import PokemonCard from '../components/PokemonCard';
import styles from '../styles/HomeScreenStyles'; 

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
          placeholder="Search Pokémon"
          value={search}
          onChangeText={handleSearch}
        />
        <Button title={`Switch to ${viewType === 'grid' ? 'List' : 'Grid'} View`} onPress={toggleViewType} />
      </View>

      {filteredPokemons.length === 0 ? (
        <Text style={styles.noData}>No Pokémon found. Try another search.</Text>
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
