import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Size, Spacing } from '../../assets/main';
import { Button, Input } from 'react-native-elements';
import { Context as AuthContext } from '../../context/AuthContext';
import { ShowIcon } from './ShowIcon';
import { HideIcon } from './HideIcon';

export const AuthForm = ({ submit, btnTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const { state } = useContext(AuthContext);

  return (
    <View>
      {state.errorMsg ? (
        <Text style={styles.error}>{state.errorMsg}</Text>
      ) : null}
      <Input
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
        placeholder='email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        containerStyle={styles.container}
        inputContainerStyle={styles.input}
        placeholder='mot de passe'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={hide}
        rightIcon={
          hide ? <HideIcon setHide={setHide} /> : <ShowIcon setHide={setHide} />
        }
      />
      <Button
        title={btnTitle}
        buttonStyle={{ marginTop: Spacing.small, height: 50 }}
        onPress={() => submit({ email, password })}
        loading={state.isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    height: 50,
    marginBottom: Spacing.regular,
  },
  input: {
    backgroundColor: Colors.bgLight,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.secondaryLight,
    borderRadius: Size.radius,
    paddingHorizontal: Spacing.regular,
  },
  error: {
    fontWeight: 'bold',
    color: 'red',
  },
});
