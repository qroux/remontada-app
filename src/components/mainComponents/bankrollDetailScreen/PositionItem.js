import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Positionitem = ({ type, value }) => {
  return (
    <View style={[styles.itemContainer]}>
      <Text style={styles.type}>{type}</Text>
      <Text>
        {value.length >= 4 ? value.replace(/([A-Z])/g, ' $1') : value}
      </Text>
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
