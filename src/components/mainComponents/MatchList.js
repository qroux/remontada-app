import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import { ShowMatch } from "./ShowMatch";

export const MatchList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
        <ShowMatch />
      </ScrollView>
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
