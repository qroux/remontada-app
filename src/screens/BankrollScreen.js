import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Common } from "../assets/common";
import { Colors } from "../assets/main";

import { BankrollList } from "../components/mainComponents/BankrollList";
import { BankrollForm } from "../components/mainComponents/BankrollForm";

export const BankrollScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Bankrolls</Text>
        <BankrollList />
        <Button title="Nouvelle Bankroll" onPress={toggleOverlay} />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <BankrollForm toggleOverlay={toggleOverlay} />
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
