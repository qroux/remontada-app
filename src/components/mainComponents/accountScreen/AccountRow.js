import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Colors, Spacing, Size } from '../../../assets/main';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const AccountRow = ({ icon, value }) => {
  return (
    <View style={styles.row}>
      <MaterialCommunityIcons
        name={icon}
        size={Size.regular}
        color={Colors.textDark}
      />
      <Text style={styles.rowText}> {value || ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.small,
  },
  rowText: {
    lineHeight: Size.regular,
    marginLeft: Spacing.regular,
  },
});
