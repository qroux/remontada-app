import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';

export const PositionForm = ({ params }) => {
  return (
    <View style={styles.container}>
      <Text>PositionForm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
