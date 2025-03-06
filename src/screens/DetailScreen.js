import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { getPokemonDetails } from '../services/api';
import TypeBadge from '../components/TypeBadge';
import StatsList from '../components/StatsList';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from '../styles/DetailScreenStyles'; 

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonDetails(id)
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch Pokemon details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />;
  }

  if (!pokemon) {
    return <Text style={styles.errorText}>Failed to load Pokemon details.</Text>;
  }

  return (
    <ErrorBoundary>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name?.toUpperCase() || 'Unknown Pokemon'}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            Height: {pokemon.height || 'N/A'} | Weight: {pokemon.weight || 'N/A'}
          </Text>

          <View style={styles.typeContainer}>
            {pokemon.types !== 'unknown' ? (
              pokemon.types.split(', ').map((type, index) => (
                <TypeBadge key={index} type={type} />
              ))
            ) : (
              <Text style={styles.noTypeText}>No types available</Text>
            )}
          </View>

          <StatsList stats={pokemon.stats} />
        </View>
      </ScrollView>
    </ErrorBoundary>
  );
};

export default DetailScreen;
