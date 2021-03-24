import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay, Button } from 'react-native-elements';
import { Common } from '../../../assets/common';
import { Colors, Spacing, Size } from '../../../assets/main';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Context as BankrollContext } from '../../../context/BankrollContext';
import { BankrollCard } from './BankrollCard';
import { useNavigation } from '@react-navigation/native';

export const Bankroll = ({ item }) => {
  const { deleteBankroll } = useContext(BankrollContext);
  const navigation = useNavigation();
  const { positions, current_balance, starter } = item;
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  // Computed Values
  const profits = Math.round(current_balance - starter);
  const progress = Math.round((profits / starter) * 100);
  const success = positions.filter((bankroll) => bankroll.status === 'Attente')
    .length;
  const success_rate = Math.round((success / positions.length) * 100);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('BankrollDetail', {
          bankroll_id: item._id,
          bankroll_name: item.name,
        })
      }
      onLongPress={() => {
        console.log('long Pressed');
        toggleOverlay();
      }}>
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
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={Common.overlay.container}>
          <Text style={Common.overlay.header}>Suppression de Bankroll</Text>
          <Text style={Common.overlay.instructions}>
            Êtes vous sûre de vouloir supprimer "{item.name}"?
          </Text>
          <Text style={{ fontWeight: 'bold' }}>
            Cette action est définitive et ne pourra être annulée.
          </Text>
          <Button
            title='Supprimer'
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => {
              toggleOverlay();
              deleteBankroll(item.id);
            }}
          />
        </View>
      </Overlay>
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
