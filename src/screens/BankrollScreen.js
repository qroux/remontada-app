import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  PlatformColor,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Overlay } from 'react-native-elements';
import { Common } from '../assets/common';
import { Colors } from '../assets/main';
import strapiApi from '../api/strapiApi';
import { Context as BankrollContext } from '../context/BankrollContext';

import { BankrollList } from '../components/mainComponents/bankrollScreen/BankrollList';
import { BankrollForm } from '../components/mainComponents/bankrollScreen/BankrollForm';

export const BankrollScreen = () => {
  const {
    state: { bankrolls },
    getUserBankrolls,
  } = useContext(BankrollContext);

  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getUserBankrolls();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <View style={styles.header}>
          <Text style={[Common.title, styles.title]}>Bankrolls</Text>
          <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
            <Ionicons name='add-outline' size={35} color={Colors.textDark} />
          </TouchableOpacity>
        </View>

        {bankrolls ? (
          <BankrollList bankrolls={bankrolls} />
        ) : (
          <ActivityIndicator
            size='large'
            color={PlatformColor('@android:color/white')}
          />
        )}
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <BankrollForm toggleOverlay={toggleOverlay} />
      </Overlay>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    lineHeight: 35,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
});
