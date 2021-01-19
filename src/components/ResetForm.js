import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors, Size, Spacing } from "../assets/main";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

export const ResetForm = () => {
  const [email, setEmail] = useState("");
  const { state, resetPassword } = useContext(AuthContext);

  return (
    <View>
      {state.errorMsg ? (
        <Text style={styles.error}>{state.errorMsg}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Renouveller mot de passe"
        buttonStyle={{ marginTop: Spacing.small, height: 50 }}
        onPress={() => submit({ email, password })}
      />
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
  error: {
    fontWeight: "bold",
    color: "red",
  },
});
