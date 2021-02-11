import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Common } from '../../assets/common';

export const BankrollEmpty = ({ params }) => (
  <View style={[Common.container, styles.container]}>
    <Image style={styles.gif} source={require('../../../assets/empty.gif')} />
    <View style={styles.instructions}>
      <Text>
        Créer une nouvelle bankroll pour mesurer vos gains à partir de votre
        mise de départ
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  gif: {
    height: 200,
    width: 200,
  },
  container: {
    alignItems: 'center',
  },
  instructions: {
    width: '80%',
  },
});
