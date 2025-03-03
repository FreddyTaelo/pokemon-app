import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsList = ({ stats }) => {
  if (!stats.length) return <Text style={styles.noStatsText}>No stats available</Text>;

  return (
    <View>
      <Text style={styles.sectionTitle}>Stats</Text>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statContainer}>
          <Text style={styles.statName}>{stat.name.toUpperCase()}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${stat.value}%` }]} />
          </View>
          <Text style={styles.statValue}>{stat.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  statContainer: { marginBottom: 10 },
  statName: { fontSize: 14, fontWeight: 'bold' },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginVertical: 5,
    width: '100%',
  },
  progress: { height: 8, borderRadius: 4, backgroundColor: '#4CAF50' },
  statValue: { textAlign: 'right', fontSize: 12 },
  noStatsText: { textAlign: 'center', color: '#888' },
});

export default React.memo(StatsList);
