import React from "react";
import dayjs from "dayjs";
import * as locale from "dayjs/locale/fr";
import SvgUri from "expo-svg-uri";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { Size, Spacing, Colors } from "../../assets/main";
import { Common } from "../../assets/common";

import { BetItem } from "./BetItem";

export const ShowMatch = ({ bet, match }) => {
  const date = dayjs(match.date).locale("fr").format("ddd DD MMM H:mm");

  return (
    <View style={[Common.compContainer, Common.border, styles.container]}>
      <View style={styles.headerContainer}>
        <Text style={styles.league}>{match.type}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.teams}>
        <View style={styles.team}>
          <SvgUri
            source={{ uri: match.home.logo.url }}
            width="100"
            height="100"
          />
          <Text style={styles.teamName}>{match.home.name}</Text>
        </View>
        <View style={styles.team}>
          <SvgUri
            source={{ uri: match.visitor.logo.url }}
            width="100"
            height="100"
          />
          <Text style={styles.teamName}>{match.visitor.name}</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.betTypeContainer}>
          <Text style={styles.betType}>{bet.type}</Text>
        </View>

        <View style={styles.betContainer}>
          <BetItem type="Bookmaker" value={bet.bookmaker} />
          <BetItem type="Cote" value={bet.odds} />
          <BetItem type="Mise" value="VOID" />
          <BetItem type="Status" value="VOID" />
        </View>
      </View>

      <Button
        title="Ajouter à ma bankRoll"
        buttonStyle={styles.cta}
        containerStyle={styles.ctaContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: Colors.headerColor,
    padding: Spacing.regular,
    borderRadius: Size.radius,
  },
  league: {
    fontSize: Size.small,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textDark,
  },
  date: {
    color: Colors.textDark,
    fontSize: Size.small,
    fontWeight: "bold",
  },
  teams: {
    flexDirection: "row",
    paddingVertical: Spacing.regular,
    backgroundColor: "white",
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
    fontSize: 13,
    // fontWeight: "bold",
  },
  main: {
    marginVertical: 20,
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
  ctaContainer: {
    alignItems: "center",
  },
  cta: {
    width: 200,
  },
});
