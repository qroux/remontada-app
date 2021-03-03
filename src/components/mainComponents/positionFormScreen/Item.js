import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.content}>{title}</Text>
  </View>
);
const styles = StyleSheet.create({
  item: {
    flex: 0.3,
    alignItems: 'center',
  },
  content: { fontWeight: 'bold' },
});
