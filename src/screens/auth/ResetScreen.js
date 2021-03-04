import React, { useState } from 'react';
import { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { Colors, Spacing, Size } from '../../assets/main';
import { Common } from '../../assets/common';
import { Context as AuthContext } from '../../context/AuthContext';

import { Footer } from '../../components/authComponents/Footer';

export const ResetScreen = () => {
  const [email, setEmail] = useState('');
  const { state, askResetPassword } = useContext(AuthContext);
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri:
            'https://images.unsplash.com/photo-1508100134119-f93388e60d95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80',
        }}
        style={Common.authStack.background}>
        <View style={Common.authStack.container}>
          <Text style={Common.authStack.upTitle}>Mot de passe oublié ?</Text>

          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>
              Entrez l'adresse mail liée à votre compte.
            </Text>
            <Text>
              Si l'adresse existe, un message sera envoyé pour renouveller votre
              mot de passe.
            </Text>
            <TextInput
              style={styles.addressContainer}
              autoCapitalize='none'
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
            <Button
              title='Envoyer Demande'
              onPress={() => askResetPassword({ email })}
              disabled={!regex.test(email)}
              loading={state.isLoading}
            />
          </View>
          <Footer path='Login' label='Connexion' />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  instructions: {
    fontSize: Size.small,
    color: Colors.textDark,
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
    paddingHorizontal: Spacing.regular,
  },
});
