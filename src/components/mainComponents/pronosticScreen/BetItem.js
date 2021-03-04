import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spacing } from '../../../assets/main';

export const BetItem = ({ type, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,

    flexBasis: 85,
    alignItems: 'center',
    paddingVertical: Spacing.small,
  },
  type: {
    fontWeight: 'bold',
  },
});
