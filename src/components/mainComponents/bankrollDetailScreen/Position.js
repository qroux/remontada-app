import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Position = ({ position }) => (
  <View>
    <Text>Position id = {position._id}</Text>
  </View>
);

const styles = StyleSheet.create({});
