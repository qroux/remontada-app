import React, { useEffect } from 'react';
import { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, Size } from '../assets/main';
import { Context as AuthContext } from '../context/AuthContext';

import { StatusBarDark } from '../components/shared/StatusBarDark';
import { AuthForm } from '../components/authComponents/AuthForm';
import { Footer } from '../components/authComponents/Footer';

export const LoginScreen = () => {
  const { state, signin, getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  const loadingScreen = <View style={styles.loadingScreen}></View>;

  const screen = (
    <SafeAreaView>
      <StatusBarDark />
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1509928015542-fcc9b3bcd048?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        }}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.upTitle}>Bienvenue sur</Text>
          <Text style={styles.header}>Remontad' App</Text>
          <Text style={styles.subTitle}>Connectez vous pour continuer</Text>
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

  return <>{state.isLoading ? loadingScreen : screen}</>;
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: Colors.textDark,
  },
  container: {
    padding: Spacing.medium,
    flex: 1,
  },
  background: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  header: {
    fontSize: Size.large,
    fontWeight: 'bold',
    color: '#F2404F',
    marginTop: -15,
    textShadowColor: 'black',
  },
  subTitle: {
    fontSize: Size.regular,
    color: 'white',
    fontWeight: 'bold',
    marginTop: Spacing.large,
    marginBottom: Spacing.small,
  },
  upTitle: {
    color: Colors.textLight,
    fontWeight: 'bold',
    fontSize: Size.large,
    marginTop: Spacing.large,
  },
});
