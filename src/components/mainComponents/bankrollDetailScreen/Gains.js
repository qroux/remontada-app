import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';

export const Gains = ({ value }) => {
  return (
    <View style={[styles.itemContainer]}>
      <Text style={styles.type}>Gains</Text>
      <Text>{value} €</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.2,
  },
  type: {
    fontWeight: 'bold',
  },
});
