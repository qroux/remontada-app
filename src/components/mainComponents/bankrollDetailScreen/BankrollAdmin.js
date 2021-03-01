import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Context as BankrollContext } from '../../../context/BankrollContext';

export const BankrollAdmin = ({ toggleOverlay }) => {
  const { state } = useContext(BankrollContext);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={toggleOverlay}
      disabled={state.isLoading}>
      <Ionicons name='trash-outline' size={24} color='black' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
});
