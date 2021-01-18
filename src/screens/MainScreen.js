import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Colors, Spacing, Size } from "../assets/main";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
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
