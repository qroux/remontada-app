import React, { useContext } from 'react';
import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import { Common } from '../assets/common';
import { Context as AuthContext } from '../context/AuthContext';

import { AuthForm } from '../components/authComponents/AuthForm';
import { Footer } from '../components/authComponents/Footer';

export const RegisterScreen = () => {
  const { signup } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
        }}
        style={Common.authStack.background}>
        <View style={Common.authStack.container}>
          <Text style={Common.authStack.upTitle}>Nouveau sur</Text>
          <Text style={Common.authStack.header}>Remontad' App ?</Text>
          <Text style={Common.authStack.subTitle}>Créer un compte</Text>
          <AuthForm submit={signup} btnTitle='Créer Compte' />
          <Footer
            header='Vous possédez déjà un compte ?'
            path='Login'
            label='Connexion'
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
