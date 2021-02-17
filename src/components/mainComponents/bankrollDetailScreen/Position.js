import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';
import { Size, Spacing, Colors } from '../../../assets/main';

import { Positionitem } from './PositionItem';

export const Position = ({ position }) => (
  <View style={[Common.borderBottom, styles.fullRow]}>
    <View style={[styles.date]}>
      <Text>à remplacer</Text>
    </View>
    <View style={styles.infoContainer}>
      <View style={styles.matchInfo}>
        <Text>
          {position.bet.match.type ? position.bet.match.type : ' à rempalcer'}
        </Text>
        <Text>{position.bet.type}</Text>
      </View>
      <View style={styles.positionInfo}>
        <Positionitem type='cote' value={position.bet.odds} />
        <Positionitem type='Statut' value={position.bet.status} />
        <Positionitem
          type='Résultat'
          value={position.outcome === 0 ? '-' : position.outcome}
        />
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
