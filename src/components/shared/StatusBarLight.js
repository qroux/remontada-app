import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../../assets/main';

export const StatusBarLight = () => (
  <StatusBar backgroundColor={Colors.statusBarLight} barStyle='dark-content' />
);
