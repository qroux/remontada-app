import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Colors, Spacing, Size } from "../assets/main";
import { Common } from "../assets/common";

import { BankrollForm } from "../components/mainComponents/BankrollForm";

export const BankrollCreateScreen = () => (
  <SafeAreaView style={Common.fullPage}>
    <View style={Common.container}>
      <Text style={styles.header}>
        Créer une nouvelle Bankroll pour mesurer vos performances à partir de
        votre mise de départ
      </Text>
      <BankrollForm />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    fontSize: Size.small,
    fontWeight: "bold",
  },
});
