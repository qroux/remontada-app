import React, { useContext, useState, useRef, useEffect } from 'react';
import { Animated, Text, View, TextInput } from 'react-native';
import { Button, Slider, Icon } from 'react-native-elements';
import { Colors, Size } from '../../../assets/main';
import { Common } from '../../../assets/common';
import { Spacing } from '../../../assets/main';
import { Context as BankrollContext } from '../../../context/BankrollContext';

export const BankrollForm = ({ toggleOverlay }) => {
  const [name, setName] = useState('');
  const [starter, setStarter] = useState(0);
  const { state, newBankroll, getUserBankrolls } = useContext(BankrollContext);

  // ANIMATIONS
  const animOpacity = useRef(new Animated.Value(0)).current;
  const animY = useRef(new Animated.Value(-25)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(animY, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(animOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  });

  return (
    <Animated.View
      style={[
        Common.overlay.content,
        { opacity: animOpacity, transform: [{ translateY: animY }] },
      ]}>
      <Text style={Common.overlay.header}>Nouvelle Bankroll</Text>
      <TextInput
        placeholder='ma bankroll (au moins 3 caractères)'
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
        buttonStyle={{ width: Size.btnWidth, alignSelf: 'center' }}
        onPress={async () => {
          await newBankroll({ name, starter });
          toggleOverlay();
          getUserBankrolls();
        }}
        loading={state.isLoading}
        disabled={name.length < 3}
      />
    </Animated.View>
  );
};
