import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Common } from '../assets/common';
import { Colors, Spacing, Size } from '../assets/main';

import { Info } from '../components/mainComponents/positionFormScreen/Info';
import { Form } from '../components/mainComponents/positionFormScreen/Form';

export const PositionFormScreen = ({ route }) => {
  const { bet, match } = route.params;
  return (
    <SafeAreaView style={Common.container}>
      <Info match={match} bet={bet} />
      <Form />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    width: '100%',
  },
});
