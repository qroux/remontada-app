import React, { useContext, useEffect } from "react";
import { Platform } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  PlatformColor,
} from "react-native";
import { Context as BankrollContext } from "../../context/BankrollContext";

import { ShowMatch } from "./ShowMatch";

export const MatchList = () => {
  const { state, getBets } = useContext(BankrollContext);

  useEffect(() => {
    getBets();
  }, []);

  return state.bets ? (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={state.bets}
        keyExtractor={(bet) => bet.id.toString()}
        renderItem={({ item }) => {
          return <ShowMatch bet={item} match={item.match} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <ActivityIndicator
      size="large"
      color={PlatformColor("@android:color/white")}
    />
  );
};

const styles = StyleSheet.create({});
