import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Slider, Icon } from 'react-native-elements';
import { Colors, Size } from '../../../assets/main';
import { Common } from '../../../assets/common';

import { InputRow } from './InputRow';

export const Form = ({ value, setValue, odds }) => {
  return (
    <View style={styles.container}>
      <Text style={Common.PositionForm.header}>Gains potentiels</Text>
      <InputRow value={value} odds={odds} />
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={100}
        step={1}
        thumbStyle={{
          height: 20,
          width: 20,
          backgroundColor: Colors.primary,
        }}
        thumbProps={{
          children: (
            <Icon
              name='euro'
              type='font-awesome'
              size={10}
              reverse
              containerStyle={{ bottom: 10, right: 10 }}
              color={Colors.primary}
            />
          ),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
