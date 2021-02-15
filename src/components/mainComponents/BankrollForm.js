import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Animated, TextInput } from 'react-native';
import { Input, Button, Slider, Icon } from 'react-native-elements';
import { Colors } from '../../assets/main';
import { Common } from '../../assets/common';
import { Spacing, Size } from '../../assets/main';
import { Context as BankrollContext } from '../../context/BankrollContext';

export const BankrollForm = ({ toggleOverlay }) => {
  const [name, setName] = useState('');
  const [starter, setStarter] = useState(0);
  const { state, newBankroll, getUserBankrolls } = useContext(BankrollContext);

  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Nouvelle Bankroll</Text>
      <TextInput
        placeholder='ma bankroll'
        onChangeText={setName}
        style={[Common.input, { width: 300 }]}
      />
      <View style={{ width: 300, marginVertical: Spacing.medium }}>
        <Text style={{ marginBottom: Spacing.regular }}>
          Mise de départ - {starter}€
        </Text>
        <Slider
          value={starter}
          onValueChange={setStarter}
          maximumValue={1000}
          step={10}
          thumbStyle={{
            height: 20,
            width: 20,
            backgroundColor: Colors.primary,
          }}
          thumbProps={{
            children: (
              <Icon
                name='euro'
                type='font-awesome'
                size={10}
                reverse
                containerStyle={{ bottom: 10, right: 10 }}
                color={Colors.primary}
              />
            ),
          }}
        />
      </View>

      <Button
        title='Créer'
        onPress={async () => {
          await newBankroll({ name, starter });
          toggleOverlay();
          getUserBankrolls();
        }}
        loading={state.isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.medium,
    paddingVertical: Spacing.regular,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: Size.regular,
    marginBottom: Spacing.regular,
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: Size.small,
    fontWeight: 'bold',

    paddingHorizontal: Spacing.regular,
  },
  track: {
    color: 'green',
  },
});
