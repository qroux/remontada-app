import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Size } from '../../../assets/main';
import { Ionicons } from '@expo/vector-icons';

export const DeleteButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name='trash-outline'
        size={Size.regular}
        color={Colors.textDark}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Size.regular,
  },
});
