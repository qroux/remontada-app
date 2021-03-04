import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Size } from '../../../assets/main';

import { Position } from './Position';

export const PositionList = ({ positions }) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.header}>Derniers paris enregistrés</Text>
      <FlatList
        style={{ flex: 1 }}
        data={positions}
        keyExtractor={(position) => position._id}
        renderItem={({ item }) => <Position position={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 500,
  },
  header: {
    fontWeight: 'bold',
    fontSize: Size.regular,
  },
});
