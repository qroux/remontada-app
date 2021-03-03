import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Spacing } from '../../../assets/main';
import { Item } from './Item';
import { Value } from './Value';

export const InputRow = ({ value, odds }) => (
  <View style={styles.fullContainer}>
    <View style={styles.row}>
      <Item title='Cote' bold={true} />
      <Item title='Mise' bold={true} />
      <Item title='Résultat' bold={true} />
    </View>
    <View style={styles.row}>
      <Value title={odds} />
      <Value title={`${value}€`} />
      <Value title={`${Math.round(value * odds)}€`} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  fullContainer: { backgroundColor: 'white' },
  row: { flexDirection: 'row', paddingVertical: Spacing.small },
  item: { flex: 0.3 },
});
