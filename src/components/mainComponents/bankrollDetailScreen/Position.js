import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';
import { Size, Spacing, Colors } from '../../../assets/main';

import { Positionitem } from './PositionItem';

export const Position = ({ position }) => (
  <View style={[Common.borderBottom, styles.fullRow]}>
    <View style={[styles.date]}>
      <Text>Ven. 5 Mai</Text>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.matchInfo}>
        <Text>OM - PSG | Gagner par 2 buts d'écart</Text>
      </View>
      <View style={styles.positionInfo}>
        <Positionitem type='odds' value='1.56' />
        <Positionitem type='Status' value='Gagné' />
        <Positionitem type='Outcome' value='+50€' />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  fullRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  date: {
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderLight,
    paddingHorizontal: Spacing.small,
  },
  infoContainer: {
    paddingHorizontal: Spacing.small,
    flex: 1,
  },
  positionInfo: {
    flexDirection: 'row',
  },
});
