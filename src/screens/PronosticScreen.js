import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Common } from '../assets/common';

import { StatusBarDark } from '../components/shared/StatusBarDark';
import { MatchList } from '../components/mainComponents/pronosticScreen/MatchList';

export const PronosticScreen = () => {
  return (
    <SafeAreaView style={Common.fullPage}>
      <StatusBarDark />
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
