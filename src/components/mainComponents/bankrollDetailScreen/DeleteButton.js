import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  PlatformColor,
} from 'react-native';
import { Context as BankrollContext } from '../../../context/BankrollContext';
import { useNavigation } from '@react-navigation/native';

import { Colors, Size } from '../../../assets/main';
import { Ionicons } from '@expo/vector-icons';

export const DeleteButton = ({ id }) => {
  const navigation = useNavigation();
  const { state } = useContext(BankrollContext);

  return (
    <View style={styles.container}>
      {state.isLoading ? (
        <ActivityIndicator
          size='small'
          color={PlatformColor(`@android:color/${Colors.spinner}`)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: Size.regular,
  },
});
