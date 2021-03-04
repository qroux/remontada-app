import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Feather, Ionicons } from '@expo/vector-icons';

export const PositionPicker = ({ bet_status }) => {
  const [selectedValue, setSelectedValue] = useState('En Attente');

  const renderIcon = () => {
    if (selectedValue === 'Gagné')
      return <Feather name='check-circle' size={24} color='green' />;
    if (selectedValue === 'Perdu')
      return <Feather name='x-circle' size={24} color='red' />;

    return <Ionicons name='timer-outline' size={24} color='black' />;
  };

  const renderItems = () => {
    const values = ['En Attente', 'Gagné', 'Perdu'];

    // SHOULB BE MODIFIED TO USE VARIABLE.VALUE INSTEAD OF STRING
    bet_status === 'enCours' ? values.splice(1, 2) : values.shift();

    return values.map((val) => {
      return <Picker.Item label={val} value={val} key={val} />;
    });
  };

  return (
    <View style={[styles.pickerContainer]}>
      {renderIcon()}
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.item}
        onValueChange={(value, itemIndex) => setSelectedValue(value)}>
        {renderItems()}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    flex: 0.3,
  },
  picker: {
    color: 'black',
    fontWeight: 'bold',
    width: 50,
  },
  item: {
    // backgroundColor: 'red',
    color: 'black',
    fontWeight: 'bold',
  },
});
