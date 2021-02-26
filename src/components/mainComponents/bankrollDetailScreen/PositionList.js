import React, { useContext } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Size } from '../../../assets/main';
import { Context as BankrollContext } from '../../../context/BankrollContext';

import { Position } from './Position';

export const PositionList = ({ positions }) => {
  const { state } = useContext(BankrollContext);

  return (
    <View>
      <Text style={styles.header}>Derniers paris enregistrés</Text>
      {state.isLoading ? null : (
        <FlatList
          data={positions}
          keyExtractor={(position) => position._id}
          renderItem={({ item }) => <Position position={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: Size.regular,
  },
});
