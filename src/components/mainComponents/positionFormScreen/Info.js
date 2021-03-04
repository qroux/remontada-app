import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Common } from '../../../assets/common';
import { Spacing } from '../../../assets/main';

import { Row } from './Row';

export const Info = ({ bet, match }) => {
  return (
    <View style={styles.container}>
      <Text style={Common.PositionForm.header}>Résumé</Text>
      <Row title={'bet-id'} content={bet.id} />
      <Row title={'Affiche'} content={match.slug} />
      <Row title={'Pari'} content={bet.type} />
      <Row title={'Bookmaker'} content={bet.bookmaker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.medium,
  },
});
