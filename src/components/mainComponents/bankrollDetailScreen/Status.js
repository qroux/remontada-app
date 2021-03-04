import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export const Status = ({ value }) => {
  const renderIcon = () => {
    if (value === 'Succes')
      return <Feather name='check-circle' size={24} color='green' />;
    if (value === 'Echec')
      return <Feather name='x-circle' size={24} color='red' />;

    return <Ionicons name='timer-outline' size={24} color='black' />;
  };

  return (
    <View style={[styles.itemContainer]}>
      <Text style={styles.type}>Statut</Text>
      {renderIcon()}
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
