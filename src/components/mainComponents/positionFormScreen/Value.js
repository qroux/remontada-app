import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Value = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  item: {
    flex: 0.3,
    alignItems: 'center',
  },
});
