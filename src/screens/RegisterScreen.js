import React, { useContext } from "react";
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

import { AuthForm } from "../components/authComponents/AuthForm";
import { Footer } from "../components/authComponents/Footer";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const navigation = useNavigation();
  const { state, signup } = useContext(AuthContext);
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
          <Text style={styles.upTitle}>Nouveau sur</Text>
          <Text style={styles.header}>Remontad' App ?</Text>
          <Text style={styles.subTitle}>Créer un compte</Text>
          <AuthForm submit={signup} btnTitle="Créer Compte" />
          <Footer
            header="Vous possédez déjà un compte ?"
            path="Login"
            label="Connexion"
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
  upTitle: {
    color: Colors.textLight,
    fontWeight: "bold",
    fontSize: Size.large,
    marginTop: Spacing.large,
  },
  subTitle: {
    fontSize: Size.regular,
    color: "white",
    fontWeight: "bold",
    marginTop: Spacing.large,
    marginBottom: Spacing.small,
  },
});
