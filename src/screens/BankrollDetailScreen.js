import React from 'react';
import { Text, View } from 'react-native';

export const BankrollDetailScreen = ({ route }) => (
  <View>
    <Text>BankrollDetailScreen {route.params.bankroll_id}</Text>
  </View>
);
