import React, { useEffect } from 'react';
import { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Colors } from '../assets/main';
import { Context as AuthContext } from '../context/AuthContext';

import { StatusBarDark } from '../components/shared/StatusBarDark';
import { AuthForm } from '../components/authComponents/AuthForm';
import { Footer } from '../components/authComponents/Footer';
import { Common } from '../assets/common';

export const LoginScreen = () => {
  const { state, signin, getToken } = useContext(AuthContext);

  // useEffect(() => {
  //   getToken();
  // }, []);

  // const loadingScreen = <View style={styles.loadingScreen}></View>;

  const screen = (
    <SafeAreaView>
      <StatusBarDark />
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1509928015542-fcc9b3bcd048?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        }}
        style={Common.authStack.background}>
        <View style={Common.authStack.container}>
          <Text style={Common.authStack.upTitle}>Bienvenue sur</Text>
          <Text style={Common.authStack.header}>Remontad' App</Text>
          <Text style={Common.authStack.subTitle}>
            Connectez vous pour continuer
          </Text>
          <AuthForm submit={signin} btnTitle='Connexion' />
          <Footer
            header='Pas encore de compte ?'
            path='Register'
            label='Inscription'
            reset={true}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );

  return <>{screen}</>;
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: Colors.textDark,
  },
});
