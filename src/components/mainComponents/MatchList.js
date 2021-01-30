import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { Context as BankrollContext } from "../../context/BankrollContext";

import { ShowMatch } from "./ShowMatch";

export const MatchList = () => {
  const { state, getBets } = useContext(BankrollContext);

  // console.log(state.bets);

  useEffect(() => {
    getBets();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state.bets}
        keyExtractor={(bet) => bet.id.toString()}
        renderItem={({ item }) => {
          // console.log("ITEM = ", item);
          return <ShowMatch bet={item} match={item.match} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "grey",
    // borderWidth: 2,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
});
