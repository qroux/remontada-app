import React from 'react';
import { View, ActivityIndicator, PlatformColor } from 'react-native';
import { Colors } from '../../assets/main';

export const PageSpinner = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator
      size='large'
      color={PlatformColor(`@android:color/${Colors.spinner}`)}
    />
  </View>
);
