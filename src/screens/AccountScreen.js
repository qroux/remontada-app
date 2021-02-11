import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import LottieView from 'lottie-react-native';
import strapiApi from '../api/strapiApi';
import { Button } from 'react-native-elements';
import { Common } from '../assets/common';
import { Colors, Spacing, Size } from '../assets/main';
import { Context as AuthContext } from '../context/AuthContext';

export const AccountScreen = () => {
  const {
    state: { user_id },
    signout,
  } = useContext(AuthContext);

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Compte utilisateur n° {user_id}</Text>

        <Image
          source={require('../../assets/bye.gif')}
          style={{ height: 100, width: 100 }}
        />
        <Button title='Déconnexion' onPress={signout} />
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
