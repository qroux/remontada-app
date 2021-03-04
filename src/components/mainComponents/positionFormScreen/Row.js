import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../../assets/main';

export const Row = ({ title, content }) => (
  <View style={styles.rowContainer}>
    <View style={styles.header}>
      <Text style={styles.bold}>{title}</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.normal}>{content}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 2,
  },
  header: {
    borderRightWidth: 0.5,
    borderRightColor: Colors.border,
    paddingVertical: Spacing.regular,
    width: 90,
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  normal: {
    textTransform: 'capitalize',
  },
  content: {
    padding: Spacing.regular,
    flex: 1,
    // alignItems: 'flex-end',
  },
});
