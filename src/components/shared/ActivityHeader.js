import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  PlatformColor,
} from 'react-native';
import { Context as BankrollContext } from '../../context/BankrollContext';

import { Colors, Size } from '../../assets/main';

export const ActivityHeader = () => {
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
