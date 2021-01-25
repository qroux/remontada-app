import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Common } from "../assets/common";
import { Colors } from "../assets/main";

import { BankrollList } from "../components/mainComponents/BankrollList";

export const BankrollScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Bankrolls</Text>
        <BankrollList />
        <Button
          title="Nouvelle Bankroll"
          onPress={() => {
            navigation.navigate("BankrollCreate");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
