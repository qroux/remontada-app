import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Icon } from 'react-native-elements';
import { Colors, Spacing } from '../../../assets/main';

import { InputRow } from './InputRow';

export const Form = ({ value, setValue, odds }) => {
  return (
    <View style={styles.container}>
      <InputRow value={value} odds={odds} />
      <Slider
        style={{ marginVertical: Spacing.medium }}
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
              size={15}
              reverse
              containerStyle={{ bottom: 15, right: 15 }}
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
