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
import { Common } from "../assets/common";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

export const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Account Screen</Text>
        <Button title="disconnect" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};
