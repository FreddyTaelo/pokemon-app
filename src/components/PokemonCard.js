import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PokemonCard = ({ pokemon, viewType, onPress }) => (
  <TouchableOpacity
    style={[styles.card, viewType === 'list' && styles.listCard]}
    onPress={onPress}
  >
    <Image source={{ uri: pokemon.image }} style={styles.image} />
    <Text style={styles.name}>{pokemon.name.toUpperCase()}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: 150,
  },
  listCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
    padding: 12,
    marginVertical: 5,
  },
  image: { width: 80, height: 80, marginRight: 15 },
  name: { fontWeight: 'bold', fontSize: 16, textAlign: 'center', flexShrink: 1 },
});

export default React.memo(PokemonCard);
