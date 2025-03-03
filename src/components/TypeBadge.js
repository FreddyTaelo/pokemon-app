import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TypeBadge = ({ type }) => {
  return (
    <Text style={[styles.typeBadge, styles[`type_${type}`]]}>
      {type.toUpperCase()}
    </Text>
  );
};

const styles = StyleSheet.create({
  typeBadge: {
    marginHorizontal: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: '#fff',
  },
  type_fire: { backgroundColor: '#F08030' },
  type_water: { backgroundColor: '#6890F0' },
  type_grass: { backgroundColor: '#78C850' },
  type_poison: { backgroundColor: '#A040A0' },
  type_electric: { backgroundColor: '#F8D030' },
  type_ice: { backgroundColor: '#98D8D8' },
});

export default React.memo(TypeBadge);
