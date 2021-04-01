import React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';

import { Bankroll } from './Bankroll';
import { BankrollEmpty } from './BankrollEmpty';

export const BankrollList = ({ bankrolls, refreshing, onRefresh }) => {
  return (
    <>
      {bankrolls.length > 0 ? (
        <FlatList
          data={bankrolls}
          keyExtractor={(bankroll) => bankroll.name}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
