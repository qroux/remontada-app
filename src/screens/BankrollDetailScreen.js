import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Common } from '../assets/common';

import { Context as BankrollContext } from '../context/BankrollContext';
import { PositionList } from '../components/mainComponents/bankrollDetailScreen/PositionList';
import { DeleteButton } from '../components/mainComponents/bankrollDetailScreen/DeleteButton';

export const BankrollDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { state, getBankrollPositions, resetPositions } = useContext(
    BankrollContext
  );
  const id = route.params.bankroll_id;

  useEffect(() => {
    navigation.setOptions({
      title: route.params.bankroll_name,
      headerRight: () => <DeleteButton id={id} />,
    });
    getBankrollPositions(id);

    return async function cleanup() {
      await resetPositions();
    };
  }, []);

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <View style={styles.content}>
          <PositionList positions={state.positions} />
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
