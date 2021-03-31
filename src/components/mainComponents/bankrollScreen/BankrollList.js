import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Bankroll } from './Bankroll';
import { BankrollEmpty } from './BankrollEmpty';

export const BankrollList = ({ bankrolls }) => {
  return (
    <>
      {bankrolls.length > 0 ? (
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
