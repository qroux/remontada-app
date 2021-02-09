import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Common } from "../assets/common";
import { Colors } from "../assets/main";
import strapiApi from "../api/strapiApi";

import { BankrollList } from "../components/mainComponents/BankrollList";
import { BankrollForm } from "../components/mainComponents/BankrollForm";

export const BankrollScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [bankrolls, setBankrolls] = useState([]);

  useEffect(() => {
    const fetchBankrolls = async () => {
      const getUser = await strapiApi.get("users/me");
      const id = getUser.data._id;

      const response = await strapiApi.get(
        `bankrolls?users_permissions_user=${id}`
      );
      setBankrolls(response.data);
    };

    fetchBankrolls();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Bankrolls</Text>
        <BankrollList bankrolls={bankrolls} />
        <Button title="Nouvelle Bankroll" onPress={toggleOverlay} />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <BankrollForm toggleOverlay={toggleOverlay} />
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
