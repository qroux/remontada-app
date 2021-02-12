import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Common } from '../../assets/common';
import { Colors, Spacing, Size } from '../../assets/main';
import { FontAwesome } from '@expo/vector-icons';

import { Bankroll } from './Bankroll';
import { BankrollEmpty } from './BankrollEmpty';

export const BankrollList = ({ bankrolls }) => {
  console.log('BANKROLLS =', bankrolls);
  return (
    <>
      {!bankrolls ? (
        <FlatList
          data={bankrolls}
          keyExtractor={(bankroll) => bankroll.name}
          renderItem={({ item }) => {
            return <Bankroll item={item} />;
          }}
          style={{ width: '100%' }}
        />
      ) : (
        <BankrollEmpty />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

{
  /* <FlatList
data={bankrolls}
keyExtractor={(bankroll) => bankroll.name}
renderItem={({ item }) => {
  return <Bankroll item={item} />;
}}
style={{ width: '100%' }}
/> */
}
