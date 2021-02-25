import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, Size } from '../assets/main';
import { Common } from '../assets/common';

import { MatchList } from '../components/mainComponents/pronosticScreen/MatchList';

export const PronosticScreen = () => {
  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>À l'affiche</Text>
        <MatchList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
