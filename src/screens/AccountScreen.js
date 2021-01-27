import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
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
  return (
    <SafeAreaView style={Common.fullPage}>
      <View style={Common.container}>
        <Text style={Common.title}>Account Screen</Text>
        <Button title="disconnect" onPress={signout} />
        <FlatList
          data={teams}
          keyExtractor={(team) => team.name}
          renderItem={({ item }) => {
            return <Text>{item.name}</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
