import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { Text, View, StyleSheet } from 'react-native';
import Animated, { cond, useCode, eq, set, add } from 'react-native-reanimated';
import {
  min,
  snapPoint,
  timing,
  usePanGestureHandler,
  useValue,
} from 'react-native-redash/lib/module/v1';
import { Common } from '../../../assets/common';
import { Size, Spacing, Colors } from '../../../assets/main';

import { Context as BankrollContext } from '../../../context/BankrollContext';
import { Positionitem } from './PositionItem';
import { Gains } from './Gains';
import { Status } from './Status';
import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export const Position = ({ position }) => {
  const { deletePosition } = useContext(BankrollContext);
  const date = dayjs(position.bet.match.date).locale('fr').format('DD MMM');

  const calculate_gains = () => {
    if (position.bet.status === 'win')
      return Math.round(position.bet.odds * position.value);
    if (position.bet.status === 'lose') return Math.round(position.value * -1);
    return ' - ';
  };

  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();

  const snapPoints = [-110, 0];
  const translateX = useValue(0);
  const offsetX = useValue(0);
  const to = snapPoint(translateX, velocity.x, snapPoints);
  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(translateX, add(offsetX, min(translation.x, 0)))
      ),
      cond(eq(state, State.END), [
        set(translateX, timing({ from: translateX, to })),
        set(offsetX, translateX),
      ]),
    ],
    []
  );

  return (
    <Animated.View style={Common.borderBottom}>
      <View style={styles.backgroundRow}>
        <TouchableOpacity
          title='Supprimer'
          onPress={() => {
            deletePosition({
              position_id: position.id,
              bankroll_id: position.bankroll,
            });
          }}>
          <View style={styles.buttonCOntainer}>
            <Text style={styles.buttonTitle}>Supprimer</Text>
          </View>
        </TouchableOpacity>
      </View>
      <PanGestureHandler
        failOffsetY={[-5, 5]}
        activeOffsetX={[-5, 5]}
        {...gestureHandler}>
        <Animated.View style={[styles.row, { transform: [{ translateX }] }]}>
          <View style={[styles.date]}>
            <Text>{date}</Text>
          </View>
          <View style={{ flex: 0.98 }}>
            <View style={styles.matchInfo}>
              <Text style={styles.slug}>
                {position.bet.match.type} | {position.bet.match.slug}
              </Text>
              <Text style={styles.type}>{position.bet.type}</Text>
            </View>
            <View style={styles.positionInfo}>
              <Status value={position.bet.status} />
              <Positionitem type='Cote' value={position.bet.odds} />
              <Positionitem type='Mise' value={position.value} />
              <Gains value={calculate_gains()} />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  backgroundRow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    paddingRight: Spacing.small,
  },
  backgroundContent: {
    color: Colors.textLight,
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    minHeight: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: Spacing.regular,
  },
  date: {
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderRightColor: Colors.borderLight,
    paddingHorizontal: Spacing.small,
    width: 70,
    alignItems: 'center',
    marginRight: Spacing.medium,
  },
  infoContainer: {
    padding: Spacing.small,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  matchInfo: {
    paddingBottom: Spacing.regular,
  },
  positionInfo: {
    flexDirection: 'row',
    paddingVertical: Spacing.regular,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: Size.radius,
    justifyContent: 'space-between',
    width: '100%',
  },
  slug: {
    fontWeight: 'bold',
  },
  buttonCOntainer: {
    backgroundColor: Colors.primary,
    width: 100,
  },
  buttonTitle: {
    color: Colors.textLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
