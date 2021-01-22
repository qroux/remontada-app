import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { Size, Spacing, Colors } from "../../assets/main";

import { BetItem } from "./BetItem";

export const ShowMatch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.league}>Ligue 1</Text>
        <Text style={styles.date}>21/01/21</Text>
      </View>
      {/* <Text style={styles.league}>Ligue 1</Text> */}

      <View style={styles.teams}>
        <View style={styles.team}>
          <Image
            source={require("../../../assets/real.svg.png")}
            style={styles.teamLogo}
          />
          <Text style={styles.teamName}>Real Madrid</Text>
        </View>
        <View style={styles.team}>
          <Image
            source={require("../../../assets/real.svg.png")}
            style={styles.teamLogo}
          />
          <Text style={styles.teamName}>Real Madrid</Text>
        </View>
      </View>

      {/* <View style={styles.dateContainer}>
        <Text style={styles.date}>21/01/21</Text>
      </View> */}

      <View style={styles.betContainer}>
        <BetItem type="Bookmaker" value="Winamax" />
        <BetItem type="Cote" value="1.55" />
        <BetItem type="Mise" value="1%" />
        <BetItem type="Status" value="en cours" />
      </View>

      <Button title="Ajouter à ma bankRoll" buttonStyle={styles.cta} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: Spacing.regular,
    backgroundColor: "white",
    marginBottom: Spacing.medium,
    borderColor: Colors.border,
    borderRadius: Size.radius,
    borderWidth: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00034f",
    padding: Spacing.regular,
    borderRadius: Size.radius,
  },
  league: {
    fontSize: Size.small,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textLight,
  },
  date: {
    color: Colors.textLight,
    fontSize: Size.small,
    fontWeight: "bold",
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
