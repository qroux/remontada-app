import React from "react";
import dayjs from "dayjs";
import * as locale from "dayjs/locale/fr";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { Size, Spacing, Colors } from "../../assets/main";
import { Common } from "../../assets/common";

import { BetItem } from "./BetItem";

export const ShowMatch = ({ bet, match }) => {
  const date = dayjs(match.date).locale("fr").format("ddd DD MMM H:mm");

  return (
    <View style={[Common.compContainer, Common.border]}>
      <View style={styles.headerContainer}>
        <Text style={styles.league}>{match.type}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.teams}>
        <View style={styles.team}>
          <Image
            source={require(`../../../assets/real.svg.png`)}
            style={styles.teamLogo}
          />
          <Text style={styles.teamName}>{match.home.name}</Text>
        </View>
        <View style={styles.team}>
          <Image
            source={require(`../../../assets/real.svg.png`)}
            style={styles.teamLogo}
          />
          <Text style={styles.teamName}>{match.visitor.name}</Text>
        </View>
      </View>

      <View style={styles.betTypeContainer}>
        <Text style={styles.betType}>{bet.type}</Text>
      </View>

      <View style={styles.betContainer}>
        <BetItem type="Bookmaker" value="Winamax" />
        <BetItem type="Cote" value={bet.odds} />
        <BetItem type="Mise" value="1%" />
        <BetItem type="Status" value="en cours" />
      </View>

      <Button title="Ajouter à ma bankRoll" buttonStyle={styles.cta} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.headerColor,
    padding: Spacing.regular,
    borderRadius: Size.radius,
  },
  league: {
    fontSize: Size.small,
    // fontWeight: "bold",
    textAlign: "center",
    color: Colors.textLight,
  },
  date: {
    color: Colors.textLight,
    fontSize: Size.small,
    // fontWeight: "bold",
  },
  teams: {
    flexDirection: "row",
    marginVertical: Spacing.regular,
  },
  team: {
    flex: 1,
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1,
  },
  teamLogo: {
    width: 50,
    height: 70,
  },
  teamName: {
    marginTop: Spacing.small,
    fontWeight: "bold",
  },
  betTypeContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary,

    // borderColor: Colors.headerColor,
    // borderWidth: 3,
  },
  betType: {
    color: Colors.textLight,
    fontWeight: "bold",
    textTransform: "capitalize",
    paddingVertical: Spacing.regular,
  },

  betContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Spacing.regular,
    backgroundColor: Colors.secondaryLight,
  },
  cta: {
    marginVertical: Spacing.regular,
    width: 200,
    marginLeft: 70,
  },
});
