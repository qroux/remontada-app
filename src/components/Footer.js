import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Size, Spacing } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

export const Footer = ({ header, path, label, reset }) => {
  const navigation = useNavigation();
  const { clearError } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          clearError();
          navigation.navigate(path);
        }}
      >
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      {reset ? (
        <TouchableOpacity
          onPress={() => {
            clearError();
            navigation.navigate(path);
          }}
        >
          <Text style={styles.label}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      ) : null}
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

  label: {
    fontSize: Size.regular,
    fontWeight: "bold",
    color: Colors.textLight,
    marginVertical: Spacing.small,
  },
});
