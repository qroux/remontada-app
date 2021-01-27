import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { Common } from "../../assets/common";
import { Spacing, Size } from "../../assets/main";

export const BankrollForm = ({ toggleOverlay }) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Nouvelle Bankroll !</Text>
      <Text style={styles.instructions}>
        Créer une nouvelle Bankroll pour mesurer vos performances à partir de
        votre mise de départ
      </Text>
      <Input
        placeholder="Ma bankroll"
        inputContainerStyle={{ width: "100%" }}
      />
      <Input
        placeholder="Mise de départ"
        inputContainerStyle={{ width: "100%" }}
      />
      <Button title="Créer" onPress={toggleOverlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.medium,
    paddingVertical: Spacing.regular,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: Size.medium,
    fontWeight: "bold",
  },
  instructions: {
    fontSize: Size.small,
    fontWeight: "bold",
    marginVertical: Spacing.medium,
    paddingHorizontal: Spacing.regular,
  },
});
