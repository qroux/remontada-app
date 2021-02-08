import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Common } from "../../assets/common";
import { Colors, Spacing, Size } from "../../assets/main";
import { FontAwesome } from "@expo/vector-icons";

import { BankrollCard } from "./BankrollCard";

export const Bankroll = ({ item }) => {
  const { positions } = item;
  const success = positions.filter((bankroll) => bankroll.status === "Attente")
    .length;
  const rate = (success / positions.length) * 100;
  const total = positions.reduce((acc, curr) => acc + curr);

  console.log(item);

  const value = 50;
  return (
    <View style={[Common.compContainer, Common.border]}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.starter}€</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>{item.positions.length} paris</Text>
        <View style={styles.rowContainer}>
          <BankrollCard
            title="Réussite"
            icon={<FontAwesome name="trophy" size={24} color={"black"} />}
            value={rate}
            unit="%"
          />
          <BankrollCard
            title="Cote moyenne"
            icon={<FontAwesome name="line-chart" size={24} color={"black"} />}
            value={total / positions.length}
            unit=" "
          />
        </View>
        <View style={styles.rowContainer}>
          <BankrollCard
            title="Progression"
            icon={<FontAwesome name="rocket" size={24} color={"black"} />}
            value={value}
            unit="%"
          />
          <BankrollCard
            title="Bénéfice"
            icon={<FontAwesome name="money" size={24} color={"black"} />}
            value={value}
            unit="€"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Spacing.regular,
    backgroundColor: Colors.headerColor,
    borderRadius: Size.radius,
  },
  title: {
    fontWeight: "bold",
    color: Colors.textLight,
  },
  infoContainer: {
    paddingVertical: Spacing.medium,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: Spacing.small,
  },
});
