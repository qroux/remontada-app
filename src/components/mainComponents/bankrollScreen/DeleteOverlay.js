import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Size, Spacing } from '../../../assets/main';
import { Common } from '../../../assets/common';

import { Context as BankrollContext } from '../../../context/BankrollContext';

export const DeleteOverlay = ({ toggleOverlay, item }) => {
  const { deleteBankroll } = useContext(BankrollContext);

  return (
    <View>
      <Text style={Common.overlay.header}>Suppression de Bankroll</Text>
      <Text style={Common.overlay.instructions}>
        Êtes vous sûre de vouloir supprimer "{item.name}"?
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
          deleteBankroll(item.id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: Spacing.medium,
  },
  button: {
    backgroundColor: 'red',
    width: Size.btnWidth,
    alignSelf: 'center',
  },
});
