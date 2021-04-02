import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Common } from '../../../assets/common';
import { Colors, Spacing, Size } from '../../../assets/main';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { BankrollCard } from './BankrollCard';
import { useNavigation } from '@react-navigation/native';
import { AnimatedOverlay } from '../../shared/AnimatedOverlay';
import { DeleteOverlay } from './DeleteOverlay';
import { currentBalance } from '../../helpers/currentBalance';

export const Bankroll = ({ item }) => {
  const navigation = useNavigation();
  const { positions, current_balance, starter } = item;
  const [visible, setVisible] = useState(false);
  const balance = currentBalance(item.starter, item.positions);

  // Computed Values
  const profits = Math.round(current_balance - starter);
  const progress = Math.round((profits / starter) * 100);
  const finished = positions.filter(
    (position) => position.bet.status !== 'pending'
  ).length;
  const win = positions.filter((position) => position.bet.status === 'win')
    .length;
  const winRate = Math.round((win / finished) * 100);

  // ANIMATIONS
  const animOpacity = useRef(new Animated.Value(0)).current;
  const animY = useRef(new Animated.Value(-25)).current;

  const toggleOverlay = () => {
    if (visible) {
      Animated.parallel([
        Animated.timing(animY, {
          toValue: -25,
          useNativeDriver: true,
        }),
        Animated.timing(animOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(animY, {
          toValue: 0,
          useNativeDriver: true,
          duration: 400,
        }),
        Animated.timing(animOpacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: 400,
        }),
      ]).start();
    }
    setVisible(!visible);
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BankrollDetail', {
          bankroll_id: item._id,
          bankroll_name: item.name,
        })
      }
      onLongPress={() => {
        toggleOverlay();
      }}>
      <View style={[Common.compContainer, Common.border, styles.width]}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{balance}€</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.rowContainer}>
            <BankrollCard
              title='Nombre de paris'
              icon={
                <Ionicons name='ios-football-outline' size={18} color='black' />
              }
              value={positions.length}
              unit=' '
            />
            <BankrollCard
              title='Réussite'
              icon={<FontAwesome name='trophy' size={18} color={'black'} />}
              value={winRate >= 0 ? winRate : '100'}
              unit='%'
            />
            <BankrollCard
              title='Bénéfice'
              icon={<MaterialIcons name='euro' size={18} color={'black'} />}
              value={Math.round(balance - item.starter)}
              unit='€'
            />
            <BankrollCard
              title='Progression'
              icon={<Ionicons name='rocket-outline' size={18} color='black' />}
              value={progress}
              unit='%'
            />
          </View>
        </View>
      </View>
      <AnimatedOverlay visible={visible} toggleOverlay={toggleOverlay}>
        <Animated.View
          style={[
            Common.overlay.content,
            { opacity: animOpacity, transform: [{ translateY: animY }] },
          ]}>
          <DeleteOverlay item={item} toggleOverlay={toggleOverlay} />
        </Animated.View>
      </AnimatedOverlay>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  width: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.regular,
    backgroundColor: Colors.headerColor,
    borderRadius: Size.radius,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.textLight,
  },
  details: {
    fontWeight: '100',
  },
  infoContainer: {
    paddingVertical: Spacing.medium,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginTop: Spacing.medium,
  },
  button: {
    backgroundColor: 'red',
    width: Size.btnWidth,
    alignSelf: 'center',
  },
});
