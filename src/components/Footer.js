import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Size, Spacing } from "../assets/main";

export const Footer = ({ header, path, label }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(path)}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Spacing.large,
  },
  header: {
    fontSize: Size.small,
    color: Colors.textLight,
  },
  label: {
    fontSize: Size.medium,
    fontWeight: "bold",
    color: Colors.textLight,
  },
});
