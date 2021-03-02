import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

import { Row } from './Row';

export const Info = ({ bet, match }) => {
  return (
    <View style={styles.container}>
      <Row title={'Affiche'} content={match.slug} />
      <Row title={'Pari'} content={bet.type} />
      <Row title={'Bookmaker'} content={bet.bookmaker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
