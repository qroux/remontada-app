import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Common } from '../assets/common';

import { StatusBarLight } from '../components/shared/StatusBarLight';
import { MatchList } from '../components/mainComponents/pronosticScreen/MatchList';

export const PronosticScreen = () => {
  return (
    <SafeAreaView style={Common.fullPage}>
      <StatusBarLight />
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
