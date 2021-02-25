import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Common } from '../../../assets/common';
import { Colors, Spacing, Size } from '../../../assets/main';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { BankrollCard } from './BankrollCard';
import { useNavigation } from '@react-navigation/native';

export const Bankroll = ({ item }) => {
  const navigation = useNavigation();
  const { positions, current_balance, starter } = item;

  const profits = current_balance - starter;
  const progress = (profits / starter) * 100;
  const success = positions.filter((bankroll) => bankroll.status === 'Attente')
    .length;
  const success_rate = (success / positions.length) * 100;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BankrollDetail', {
          bankroll_id: item._id,
          bankroll_name: item.name,
        })
      }>
      <View style={[Common.compContainer, Common.border, styles.width]}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.current_balance}€</Text>
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
              value={success_rate ? success_rate : '100'}
              unit='%'
            />
            <BankrollCard
              title='Bénéfice'
              icon={<MaterialIcons name='euro' size={18} color={'black'} />}
              value={profits}
              unit='€'
              evolution={progress}
            />
          </View>
        </View>
      </View>
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
});
