import React from 'react';
import dayjs from 'dayjs';
import { Text, View, StyleSheet } from 'react-native';
import { Common } from '../../../assets/common';
import { Size, Spacing, Colors } from '../../../assets/main';

import { Positionitem } from './PositionItem';
import { PositionPicker } from './PositionPicker';

export const Position = ({ position }) => {
  const date = dayjs(position.bet.match.date).locale('fr').format('DD MMM');

  return (
    <View style={[Common.borderBottom, styles.fullRow]}>
      <View style={[styles.date]}>
        <Text>{date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.matchInfo}>
          <Text style={styles.slug}>
            {position.bet.match.type} | {position.bet.match.slug}
          </Text>
          <Text style={styles.type}>{position.bet.type}</Text>
        </View>
        <View style={styles.positionInfo}>
          <Positionitem type='Cote' value={position.bet.odds} />
          <Positionitem type='Statut' value={position.bet.status} />
          <Positionitem
            type='Gains'
            value={position.outcome === 0 ? '-' : position.outcome}
          />
          <PositionPicker />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: Size.radius,
  },
  date: {
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderLight,
    paddingHorizontal: Spacing.small,
    flex: 0.2,
    alignItems: 'center',
  },
  infoContainer: {
    padding: Spacing.small,
    flex: 1,

    justifyContent: 'space-between',
  },
  matchInfo: {
    paddingVertical: Spacing.regular,
  },
  positionInfo: {
    flexDirection: 'row',
    paddingVertical: Spacing.regular,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: Size.radius,
    justifyContent: 'space-between',
  },
  slug: {
    fontWeight: 'bold',
  },
  // type: {
  //   fontWeight: 'bold',
  // },
});
