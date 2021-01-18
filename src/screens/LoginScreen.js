import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

import { AuthForm } from "../components/AuthForm";
import { Footer } from "../components/Footer";

export const LoginScreen = () => {
  const { state, signin, getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1504016798967-59a258e9386d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80",
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text style={styles.upTitle}>Bienvenue sur</Text>
          <Text style={styles.header}>Remontad'App</Text>
          <Text style={styles.subTitle}>Connectez vous pour continuer</Text>
          <AuthForm submit={signin} />
          <Footer
            header="Pas encore de compte ?"
            path="Register"
            label="Inscription"
          />
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
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    // resizeMode: "cover",
    // justifyContent: "center",
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
    fontWeight: "bold",
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
