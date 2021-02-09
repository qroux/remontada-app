import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Common } from "../../assets/common";
import { Colors, Spacing, Size } from "../../assets/main";
import { FontAwesome } from "@expo/vector-icons";

import { BankrollCard } from "./BankrollCard";

export const Bankroll = ({ item }) => {
  const { positions, current_balance, starter_balance } = item;

  const profits = current_balance - starter_balance;
  const progress = (profits / starter_balance) * 100;
  const success = positions.filter((bankroll) => bankroll.status === "Attente")
    .length;
  const success_rate = (success / positions.length) * 100;

  const average_odds = () => {
    let total_odds = 0;
    let count = 0;

    item.positions.forEach((position) => {
      total_odds += position.bet.odds;
      count += 1;
    });

    return total_odds / count;
  };

  return (
    <View style={[Common.compContainer, Common.border]}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {item.name}{" "}
          <Text style={styles.details}>| {item.positions.length} paris</Text>
        </Text>
        <Text style={styles.title}>{item.starter}€</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <BankrollCard
            title="Réussite"
            icon={<FontAwesome name="trophy" size={18} color={"black"} />}
            value={success_rate}
            unit="%"
          />
          <BankrollCard
            title="Cote moyenne"
            icon={<FontAwesome name="line-chart" size={18} color={"black"} />}
            value={average_odds()}
            unit=" "
          />
        </View>
        <View style={styles.rowContainer}>
          <BankrollCard
            title="Progression"
            icon={<FontAwesome name="rocket" size={18} color={"black"} />}
            value={progress}
            unit="%"
          />
          <BankrollCard
            title="Bénéfice"
            icon={<FontAwesome name="money" size={18} color={"black"} />}
            value={profits}
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
  details: {
    fontWeight: "100",
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
