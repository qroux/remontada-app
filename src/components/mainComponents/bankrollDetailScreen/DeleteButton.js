import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  PlatformColor,
} from 'react-native';
import { Context as BankrollContext } from '../../../context/BankrollContext';
import { useNavigation } from '@react-navigation/native';

import { Colors, Size } from '../../../assets/main';
import { Ionicons } from '@expo/vector-icons';

export const DeleteButton = ({ id }) => {
  const navigation = useNavigation();
  const { state, deleteBankroll, getUserBankrolls } = useContext(
    BankrollContext
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={async () => {
        await deleteBankroll(id);
        await getUserBankrolls();
        navigation.navigate('Bankroll');
      }}>
      {state.isLoading ? (
        <ActivityIndicator
          size='small'
          color={PlatformColor('@android:color/holo_blue_bright')}
        />
      ) : (
        <Ionicons
          name='trash-outline'
          size={Size.regular}
          color={Colors.textDark}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: Size.regular,
  },
});
