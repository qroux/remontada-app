import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../assets/main';

import { Context as AuthContext } from '../../context/AuthContext';

export const LoadingScreen = () => {
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    getToken();
  }, []);

  return <View style={styles.loadingScreen}></View>;
};

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    backgroundColor: Colors.textDark,
  },
});
