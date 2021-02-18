import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Size } from '../../../assets/main';

import { Position } from './Position';

export const PositionList = ({ positions }) => (
  <View>
    <Text style={styles.header}>Derniers paris enregistrés</Text>
    <FlatList
      data={positions}
      keyExtractor={(position) => position._id}
      renderItem={({ item }) => <Position position={item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: Size.regular,
  },
});
