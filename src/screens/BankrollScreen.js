import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  PlatformColor,
} from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Common } from '../assets/common';
import { Colors } from '../assets/main';
import strapiApi from '../api/strapiApi';
import { Context as BankrollContext } from '../context/BankrollContext';

import { BankrollList } from '../components/mainComponents/BankrollList';
import { BankrollForm } from '../components/mainComponents/BankrollForm';

export const BankrollScreen = () => {
  const {
    state: { bankrolls },
    getUserBankrolls,
  } = useContext(BankrollContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  console.log('STATE =', bankrolls);

  useEffect(() => {
    getUserBankrolls();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Bankrolls</Text>
        {bankrolls ? (
          <>
            <BankrollList bankrolls={bankrolls} />
            <Button title='Nouvelle Bankroll' onPress={toggleOverlay} />
          </>
        ) : (
          <ActivityIndicator
            size='large'
            color={PlatformColor('@android:color/white')}
          />
        )}
        {/*  */}
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <BankrollForm toggleOverlay={toggleOverlay} />
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
