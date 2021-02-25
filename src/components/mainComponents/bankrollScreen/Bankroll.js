import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Common } from '../../../assets/common';
import { Colors, Spacing, Size } from '../../../assets/main';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { BankrollCard } from './BankrollCard';
import { navigationRef } from '../../../../RootNavigation';
import { useNavigation } from '@react-navigation/native';

export const Bankroll = ({ item }) => {
  const navigation = useNavigation();
  const { positions, current_balance, starter } = item;

  const profits = current_balance - starter;
  const progress = (profits / starter) * 100;
  const success = positions.filter((bankroll) => bankroll.status === 'Attente')
    .length;
  const success_rate = (success / positions.length) * 100;

  const average_odds = () => {
    let total_odds = 0;
    let count = 0;

    item.positions.forEach((position) => {
      total_odds += position.bet.odds;
      count += 1;
    });

    return count > 0 ? total_odds / count : '';
  };

  return (
    <View style={[Common.compContainer, Common.border, styles.width]}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {item.name}{' '}
          <Text style={styles.details}>| {item.current_balance}€</Text>
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BankrollDetail', {
              bankroll_id: item._id,
              bankroll_name: item.name,
            })
          }>
          <MaterialCommunityIcons
            name='playlist-edit'
            size={24}
            color='white'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <BankrollCard
            title='Réussite'
            icon={<FontAwesome name='trophy' size={18} color={'black'} />}
            value={success_rate ? success_rate : '100'}
            unit='%'
          />
          <BankrollCard
            title='Cote moyenne'
            icon={<FontAwesome name='line-chart' size={18} color={'black'} />}
            value={average_odds()}
            unit=' '
          />
        </View>
        <View style={styles.rowContainer}>
          <BankrollCard
            title='Progression'
            icon={<FontAwesome name='rocket' size={18} color={'black'} />}
            value={progress}
            unit='%'
          />
          <BankrollCard
            title='Bénéfice'
            icon={<FontAwesome name='money' size={18} color={'black'} />}
            value={profits}
            unit='€'
          />
        </View>
      </View>
    </View>
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
    justifyContent: 'center',
    paddingVertical: Spacing.small,
  },
});