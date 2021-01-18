import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-elements";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

export const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="disconnect" onPress={signout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
