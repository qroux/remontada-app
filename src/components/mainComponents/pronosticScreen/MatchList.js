import React, { useState, useContext, useEffect, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  PlatformColor,
} from 'react-native';
import { Colors } from '../../../assets/main';
import { Context as BankrollContext } from '../../../context/BankrollContext';

import { ShowMatch } from './ShowMatch';

export const MatchList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { state, getBets } = useContext(BankrollContext);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getBets();

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getBets();
  }, []);

  return state.bets ? (
    <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        data={state.bets}
        keyExtractor={(bet) => bet.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => {
          return <ShowMatch bet={item} match={item.match} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <ActivityIndicator
      size='large'
      color={PlatformColor(`@android:color/${Colors.spinner}`)}
    />
  );
};

const styles = StyleSheet.create({});
