import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Colors, Size } from "../assets/main";

export const AuthForm = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="email" />
      <TextInput style={styles.input} placeholder="password" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.bgLight,
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.secondaryLight,
    borderRadius: Size.radius,
  },
});
