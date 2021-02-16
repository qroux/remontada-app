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
import strapiApi from '../api/strapiApi';
import { Button } from 'react-native-elements';
import { Common } from '../assets/common';
import { Colors, Spacing, Size } from '../assets/main';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';

export const AccountScreen = () => {
  const {
    state: { user_id, user },
    signout,
    getUser,
  } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={[Common.container]}>
        <Text style={Common.title}>Compte utilisateur</Text>

        <View style={styles.content}>
          <View style={styles.rowsContainer}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name='account-circle-outline'
                size={Size.regular}
                color={Colors.textDark}
              />
              <Text style={styles.rowText}> {user ? user.email : ''}</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name='identifier'
                size={Size.regular}
                color={Colors.textDark}
              />
              <Text style={styles.rowText}> {user_id ? user_id : ''}</Text>
            </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.regular,
  },
  rowText: {
    lineHeight: Size.regular,
    marginLeft: Spacing.regular,
  },
  content: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'space-between',
  },
});
