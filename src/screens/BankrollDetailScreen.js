import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { Context as BankrollContext } from '../context/BankrollContext';

export const BankrollDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, deleteBankroll, getUserBankrolls } = useContext(
    BankrollContext
  );
  const id = route.params.bankroll_id;

  return (
    <View>
      <Text>BankrollDetailScreen {id}</Text>
      <Button
        title='delete'
        onPress={async () => {
          await deleteBankroll(id);
          await getUserBankrolls();
          navigation.navigate('Bankroll');
        }}
        loading={state.isLoading}
      />
    </View>
  );
};
