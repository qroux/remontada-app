import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Common } from '../assets/common';

import { Context as BankrollContext } from '../context/BankrollContext';
import { PositionList } from '../components/mainComponents/bankrollDetailScreen/PositionList';

export const BankrollDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, deleteBankroll, getUserBankrolls } = useContext(
    BankrollContext
  );
  const id = route.params.bankroll_id;

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <View style={styles.content}>
          {/* <Text>BankrollDetailScreen {id}</Text>
          <Button
            title='delete'
            onPress={async () => {
              await deleteBankroll(id);
              await getUserBankrolls();
              navigation.navigate('Bankroll');
            }}
            loading={state.isLoading}
          /> */}
          <PositionList
            positions={[{ _id: 'object 1' }, { _id: 'object 2' }]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
  },
});
