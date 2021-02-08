import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import LottieView from "lottie-react-native";
import strapiApi from "../api/strapiApi";
import { Button } from "react-native-elements";
import { Common } from "../assets/common";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

export const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  // const animation = useRef(null);

  // useEffect(() => {
  //   animation.current.play();
  // }, []);

  // const resetAnimation = () => {
  //   console.log("pressed");
  //   animation.current.reset();
  //   animation.current.play();
  // };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Compte utilisateur</Text>

        {/* <LottieView
          ref={animation}
          style={{
            width: 100,
            height: 100,
          }}
          source={require("../../assets/emoji.json")}
          loop={true}
        /> */}
        <Image
          source={require("../../assets/bye.gif")}
          style={{ height: 100, width: 100 }}
        />
        <Button title="Déconnexion" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    // alignItems: "center",
    // justifyContent: "center",
  },
});
