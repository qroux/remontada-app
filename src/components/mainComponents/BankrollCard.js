import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Common } from "../../assets/common";
import { Size, Colors } from "../../assets/main";

export const BankrollCard = ({ title, icon, value, unit }) => (
  <View style={[styles.container]}>
    <View style={styles.title}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text
      style={[
        styles.content,
        { color: value >= 0 ? Colors.success : Colors.fail },
      ]}
    >
      {value} {unit}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 160,
    alignItems: "center",
  },
  title: {
    fontWeight: "normal",
    fontSize: 10,
    color: Colors.textDark,
    alignItems: "center",
  },
  content: {
    fontWeight: "bold",
    fontSize: Size.regular,
  },
});
