import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, Size } from '../assets/main';
import { Common } from '../assets/common';
import { Context as AuthContext } from '../context/AuthContext';

import { Footer } from '../components/authComponents/Footer';
import { useNavigation } from '@react-navigation/native';

export const AccountConfirmationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, signup } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
        }}
        style={Common.authStack.background}>
        <View style={Common.authStack.container}>
          <Text style={Common.authStack.upTitle}>Compte crée</Text>
          <Text style={Common.authStack.header}>Remontad' App</Text>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
              Votre compte a été créé. Activez le grâce au lien envoyé par mail
              à l'adresse
            </Text>
            <View style={styles.addressContainer}>
              <Text style={styles.address}>{route.params.email}</Text>
            </View>
          </View>

          <Footer
            header='Vous possédez déjà un compte ?'
            path='Login'
            label="Retour à l'accueil"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  instructions: {
    fontSize: Size.small,
    color: Colors.textDark,
    fontWeight: 'bold',
  },
  instructionsContainer: {
    marginTop: Spacing.large,
    marginBottom: Spacing.small,
    padding: Spacing.medium,
    backgroundColor: Colors.bgLight,
    borderRadius: Size.radius,
  },
  addressContainer: {
    backgroundColor: Colors.bgDark,
    marginVertical: Spacing.medium,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Size.radius,
  },
});
