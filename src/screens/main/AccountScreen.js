import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import dayjs from 'dayjs';
import { Button } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { Common } from '../../assets/common';
import { Spacing } from '../../assets/main';
import { Context as AuthContext } from '../../context/AuthContext';

import { AccountRow } from '../../components/mainComponents/accountScreen/AccountRow';

export const AccountScreen = () => {
  const {
    state: { user_id, user },
    signout,
    getUser,
  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const date = user
    ? dayjs(user.createdAt).locale('fr').format('ddd DD MMM YYYY')
    : '';

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={[Common.container]}>
        <Text style={Common.title}>Compte utilisateur</Text>

        <View style={styles.content}>
          <View style={styles.rowsContainer}>
            <AccountRow
              icon='account-circle-outline'
              value={user ? user.email : ''}
            />
            <AccountRow icon='identifier' value={user_id ? user_id : ''} />
            <AccountRow
              icon='calendar-month-outline'
              value={user ? date : ''}
            />
          </View>

          <View>
            <LottieView
              source={require('../../../assets/bye.json')}
              autoPlay
              loop
              speed={0.3}
              style={{ alignSelf: 'center', height: 200 }}
            />
            {/* <Image
              source={require('../../../assets/bye.gif')}
              style={{ alignSelf: 'center', height: 200, width: 200 }}
            /> */}
            <Button title='Déconnexion' onPress={signout} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rowsContainer: {
    marginTop: Spacing.regular,
  },

  content: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'space-between',
  },
});
