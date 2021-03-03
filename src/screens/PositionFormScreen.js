import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Common } from '../assets/common';
import { Colors, Spacing, Size } from '../assets/main';

import { Context as BankrollContext } from '../context/BankrollContext';
import { Info } from '../components/mainComponents/positionFormScreen/Info';
import { Form } from '../components/mainComponents/positionFormScreen/Form';

export const PositionFormScreen = ({ route }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(66);
  const { state, postPosition } = useContext(BankrollContext);
  const { bet, match } = route.params;
  // console.log('Bankrolls[0] =', state.bankrolls[0]);

  const submitPosition = async () => {
    await postPosition({
      user_id: '600ad9fe262321001541df1e',
      bet_id: bet.id,
      bankroll_id: state.bankrolls[0].id,
      value,
    });

    navigation.navigate('Bankroll');
  };

  return (
    <SafeAreaView style={Common.container}>
      <Info match={match} bet={bet} />
      <Form value={value} setValue={setValue} odds={bet.odds} />
      <Button
        containerStyle={{ marginTop: 100 }}
        title='Ajouter à ma Bankroll'
        onPress={() => {
          submitPosition();
        }}
        loading={state.isLoading}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'red',
    width: '100%',
  },
});
