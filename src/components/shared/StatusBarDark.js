import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../../assets/main';

export const StatusBarDark = () => (
  <StatusBar backgroundColor={Colors.statusBarDark} barStyle='light-content' />
);
