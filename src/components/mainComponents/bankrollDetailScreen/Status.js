import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export const Status = ({ value }) => {
  const renderIcon = () => {
    if (value === 'win')
      return <Feather name='check-circle' size={18} color='green' />;
    if (value === 'lose')
      return <Feather name='x-circle' size={18} color='red' />;

    return <Ionicons name='timer-outline' size={18} color='black' />;
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
