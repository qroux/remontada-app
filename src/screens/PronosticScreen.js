import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Colors, Spacing, Size } from "../assets/main";
import { Common } from "../assets/common";

import { MatchList } from "../components/mainComponents/MatchList";

// PRONOSTICS -> Affiches des Value Bet en Cours
// STRUCTURE : 1 composant par affiche => ScrollView

// INFOS : ligue + noms équipes + logos + date + heure
// TYPE DE PARI : + bookmaker + cote + en cours
// CTA : Ajouter à sa bankroll

export const PronosticScreen = () => {
  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={styles.title}>Value Bets à l'affiche</Text>
        <MatchList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: Size.medium,
    fontWeight: "bold",
    marginTop: Spacing.medium,
    marginBottom: Spacing.medium,
  },
});
