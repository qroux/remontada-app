import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../../assets/main';
import { Common } from '../../../assets/common';

export const BankrollPicker = ({
  bankrolls,
  selectedBankroll,
  setSelectedBankroll,
}) => {
  const renderItems = () => {
    return bankrolls.map((bankroll) => {
      return (
        <Picker.Item
          style={styles.item}
          label={bankroll.name}
          value={bankroll.id}
          key={bankroll.name}
        />
      );
    });
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={Common.PositionForm.header}>Gains potentiels</Text>

      <View style={styles.rowContainer}>
        <View style={styles.header}>
          <Text style={styles.bold}>Bankroll</Text>
        </View>
        <View style={styles.content}>
          <Picker
            selectedValue={selectedBankroll}
            onValueChange={(selection) => setSelectedBankroll(selection)}>
            {renderItems()}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
  },
  item: {
    backgroundColor: 'red',
    color: 'red',
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 2,
  },
  header: {
    borderRightWidth: 0.5,
    borderRightColor: Colors.border,
    paddingVertical: Spacing.regular,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  normal: {
    textTransform: 'capitalize',
  },
  content: {
    padding: Spacing.small,
    flex: 1,

    // alignItems: 'flex-end',
  },
});
