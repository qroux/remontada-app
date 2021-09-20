import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';
import LottieView from 'lottie-react-native';

export const BankrollEmpty = () => (
  <View style={[Common.container, styles.container]}>
    <LottieView
      source={require('../../../../assets/empty.json')}
      autoPlay
      loop
      speed={0.8}
      style={{ alignSelf: 'center', height: 150 }}
    />
    {/* <Image
      style={styles.gif}
      source={require('../../../../assets/empty.gif')}
    /> */}
    <View style={styles.instructions}>
      <Text style={{ textAlign: 'center' }}>
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
    marginTop: 100,
  },
});
