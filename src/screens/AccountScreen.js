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
        <Text style={Common.title}>Compte utilisateur n° {user_id}</Text>

        <View style={styles.content}>
          <Text>. {user ? user.email : ''}</Text>
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
  animationContainer: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    flex: 0.9,
    width: '100%',
    justifyContent: 'space-between',
  },
});
