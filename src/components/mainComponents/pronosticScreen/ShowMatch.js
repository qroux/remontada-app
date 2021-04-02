import React from 'react';
import { useNavigation } from '@react-navigation/native';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import SvgUri from 'expo-svg-uri';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Size, Spacing, Colors } from '../../../assets/main';
import { Common } from '../../../assets/common';

import { BetItem } from './BetItem';

export const ShowMatch = ({ bet, match, hasBankrolls }) => {
  const navigation = useNavigation();
  const date = dayjs(match.date).locale('fr').format('ddd DD MMM H:mm');
  const translate = {
    pending: 'en attente',
    win: 'validé',
    lose: 'perdu',
    reported: 'reporté',
  };

  return (
    <View style={[Common.compContainer, styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={styles.league}>{match.type}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.teams}>
        <View style={styles.team}>
          <SvgUri
            source={{ uri: match.home.logo.url }}
            width='70'
            height='70'
          />
          <Text style={styles.teamName}>{match.home.name}</Text>
        </View>
        <View style={styles.team}>
          <SvgUri
            source={{ uri: match.visitor.logo.url }}
            width='70'
            height='70'
          />
          <Text style={styles.teamName}>{match.visitor.name}</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.betTypeContainer}>
          <Text style={styles.betType}>{bet.type}</Text>
        </View>

        <View style={styles.betContainer}>
          <BetItem type='Bookmaker' value={bet.bookmaker} />
          <BetItem type='Cote' value={bet.odds} />
          <BetItem type='Statut' value={translate[bet.status]} />
        </View>
      </View>

      <Button
        title='Ajouter à une bankroll'
        buttonStyle={styles.cta}
        containerStyle={styles.ctaContainer}
        onPress={() => {
          if (hasBankrolls.length > 0) {
            navigation.navigate('PositionForm', { bet, match });
          } else {
            navigation.navigate('Bankroll');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.borderLight,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.regular,
    borderRadius: Size.radius,
    backgroundColor: 'white',
  },
  league: {
    fontSize: Size.small,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.textDark,
    backgroundColor: 'white',
  },
  date: {
    color: Colors.textDark,
    fontSize: Size.small,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  teams: {
    flexDirection: 'row',
    paddingVertical: Spacing.regular,
    backgroundColor: 'white',
  },
  team: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  teamLogo: {
    width: 50,
    height: 70,
  },
  teamName: {
    marginTop: Spacing.small,
    fontSize: 13,
  },
  main: {
    marginVertical: 0,
  },
  betTypeContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  betType: {
    color: Colors.textLight,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingVertical: Spacing.regular,
  },

  betContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.secondaryLight,
  },
  ctaContainer: {
    alignItems: 'center',
    marginTop: Spacing.regular,
  },
  cta: {
    width: Size.btnWidth,
  },
});
