import React, { useState, useEffect } from "react";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

import { Footer } from "../components/Footer";
import { ResetForm } from "../components/ResetForm";

export const ResetScreen = () => {
  const { state } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80",
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.upTitle}>Mot de passe oublié ?</Text>
          <Text style={styles.subTitle}>
            Entrez votre email pour renouveller votre mot de passe
          </Text>
          <ResetForm />
          <Footer path="Login" label="Connexion" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing.medium,
    flex: 1,
  },
  background: {
    height: Dimensions.get("window").height - StatusBar.currentHeight,
    width: Dimensions.get("window").width,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    fontSize: Size.large,
    fontWeight: "bold",
    color: "#F2404F",
    marginTop: -15,
    textShadowColor: "black",
  },
  subTitle: {
    fontSize: Size.regular,
    color: "white",
    marginTop: Spacing.large,
    marginBottom: Spacing.small,
  },
  upTitle: {
    color: Colors.textLight,
    fontWeight: "bold",
    fontSize: Size.large,
    marginTop: Spacing.large,
  },
});
