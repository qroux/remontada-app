import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Common } from "../assets/common";
import { Colors } from "../assets/main";

import { Bankroll } from "../components/mainComponents/Bankroll";

export const BankrollScreen = () => {
  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Bankroll</Text>
        <Bankroll />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
