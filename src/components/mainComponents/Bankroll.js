import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Common } from "../../assets/common";

export const Bankroll = () => {
  return (
    <View style={Common.border}>
      <Text style={styles.title}>Moulaga</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
