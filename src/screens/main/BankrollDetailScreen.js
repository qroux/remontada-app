import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { Common } from '../../assets/common';
import { Size, Spacing } from '../../assets/main';

import { Context as BankrollContext } from '../../context/BankrollContext';
import { BankrollAdmin } from '../../components/mainComponents/bankrollDetailScreen/BankrollAdmin';
import { PositionList } from '../../components/mainComponents/bankrollDetailScreen/PositionList';
import { PositionForm } from '../../components/mainComponents/bankrollDetailScreen/PositionForm';

export const BankrollDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const {
    state,
    getBankrollPositions,
    resetPositions,
    deleteBankroll,
    getUserBankrolls,
    getCurrentBalance,
  } = useContext(BankrollContext);
  const id = route.params.bankroll_id;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    navigation.setOptions({
      title: route.params.bankroll_name,
    });
    getBankrollPositions(id);
    getCurrentBalance(id);

    return function cleanup() {
      getUserBankrolls();
      resetPositions();
    };
  }, []);

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <View style={styles.content}>
          <BankrollAdmin toggleOverlay={toggleOverlay} />
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={Common.overlay.container}>
              <Text style={Common.overlay.header}>Suppression de Bankroll</Text>
              <Text style={Common.overlay.instructions}>
                Êtes vous sûre de vouloir supprimer "
                {route.params.bankroll_name}"?
              </Text>
              <Text style={{ fontWeight: 'bold' }}>
                Cette action est définitive et ne pourra être annulée.
              </Text>
              <Button
                title='Supprimer'
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                onPress={() => {
                  toggleOverlay();
                  navigation.navigate('Bankroll');
                  deleteBankroll(id);
                }}
                loading={state.isLoading}
              />
            </View>
          </Overlay>
          {/* <PositionForm /> */}
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
  buttonContainer: {
    marginTop: Spacing.medium,
  },
  button: {
    backgroundColor: 'red',
    width: Size.btnWidth,
  },
});
