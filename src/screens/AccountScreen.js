import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import SvgUri from "expo-svg-uri";
import strapiApi from "../api/strapiApi";
import { Button } from "react-native-elements";
import { Common } from "../assets/common";
import { Colors, Spacing, Size } from "../assets/main";
import { Context as AuthContext } from "../context/AuthContext";

export const AccountScreen = () => {
  const [teams, setTeams] = useState([]);
  const { state, signout } = useContext(AuthContext);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await strapiApi.get("/teams");
      setTeams(response.data);
    };

    fetchTeams();
  }, []);

  const renderLogos = async () => {
    return;
  };

  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Account Screen</Text>
        <Button title="disconnect" onPress={signout} />
        <FlatList
          data={teams}
          keyExtractor={(team) => team.name}
          renderItem={({ item }) => {
            return (
              <SvgUri
                source={{ uri: item.logo.url }}
                width="100"
                height="100"
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
});
