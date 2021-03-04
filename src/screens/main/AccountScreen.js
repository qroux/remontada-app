import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import LottieView from 'lottie-react-native';
import dayjs from 'dayjs';
import strapiApi from '../../api/strapiApi';
import { Button } from 'react-native-elements';
import { Common } from '../../assets/common';
import { Colors, Spacing, Size } from '../../assets/main';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
            <Image
              source={require('../../assets/bye.gif')}
              style={{ alignSelf: 'center', height: 200, width: 200 }}
            />
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
