import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Common } from "../../assets/common";
import { Size, Colors } from "../../assets/main";

export const BankrollCard = ({ title, icon, value, unit }) => (
  <View style={[Common.border, styles.container]}>
    <View style={styles.title}>
      {icon}
      <Text>{title}</Text>
    </View>
    <Text style={[styles.content, { color: value > 0 ? "green" : "red" }]}>
      {value} {unit}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 160,
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: Colors.textDark,
    // flexDirection: "row",
    // justifyContent: "center",

    alignItems: "center",
  },
  content: {
    fontWeight: "bold",
    fontSize: Size.medium,
  },
});
