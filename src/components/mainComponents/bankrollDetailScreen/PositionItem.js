import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';

export const Positionitem = ({ type, value }) => (
  <View style={[styles.itemContainer]}>
    <Text>{type}</Text>
    <Text>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    flex: 0.25,
  },
});
