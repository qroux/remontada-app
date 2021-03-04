import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { Common } from '../../assets/common';

import { Context as BankrollContext } from '../../context/BankrollContext';
import { Info } from '../../components/mainComponents/positionFormScreen/Info';
import { Form } from '../../components/mainComponents/positionFormScreen/Form';
import { BankrollPicker } from '../../components/mainComponents/positionFormScreen/BankrollPicker';

export const PositionFormScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, postPosition, getUserBankrolls } = useContext(BankrollContext);
  const { bet, match } = route.params;

  const [value, setValue] = useState(0);
  const [selectedBankroll, setSelectedBankroll] = useState(
    state.bankrolls[0].id
  );

  const submitPosition = async () => {
    const bankroll_name = state.bankrolls.find(
      (bankroll) => bankroll.id === selectedBankroll
    ).name;

    await postPosition({
      user_id: '600ad9fe262321001541df1e',
      bet_id: bet.id,
      bankroll_id: selectedBankroll,
      value,
    });

    getUserBankrolls();
    // Remove Position creation screen from navigation.history => prevents back navigation to Position creation after redirection
    navigation.pop();
    navigation.navigate('BankrollDetail', {
      bankroll_id: selectedBankroll,
      bankroll_name,
    });
  };

  return (
    <SafeAreaView style={Common.container}>
      <Info match={match} bet={bet} />
      <BankrollPicker
        bankrolls={state.bankrolls}
        selectedBankroll={selectedBankroll}
        setSelectedBankroll={setSelectedBankroll}
      />
      <Form value={value} setValue={setValue} odds={bet.odds} />

      <Button
        containerStyle={{ marginTop: 20 }}
        title='Ajouter à ma Bankroll'
        onPress={() => {
          submitPosition();
        }}
        loading={state.isLoading}
      />
    </SafeAreaView>
  );
};
