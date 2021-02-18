import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Common } from '../../../assets/common';
import { Feather, Ionicons } from '@expo/vector-icons';

export const PositionPicker = ({ params }) => {
  const [selectedValue, setSelectedValue] = useState('En Attente');

  const renderIcon = () => {
    if (selectedValue === 'Gagné')
      return <Feather name='check-circle' size={24} color='green' />;
    if (selectedValue === 'Perdu')
      return <Feather name='x-circle' size={24} color='red' />;

    return <Ionicons name='timer-outline' size={24} color='black' />;
  };

  return (
    <View style={[styles.pickerContainer]}>
      {renderIcon()}
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.item}
        onValueChange={(value, itemIndex) => setSelectedValue(value)}
        // mode='dropdown'
      >
        <Picker.Item label='En Attente' value={'En Attente'} />
        <Picker.Item label='Gagné' value={'Gagné'} />
        <Picker.Item label='Perdu' value={'Perdu'} />
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
