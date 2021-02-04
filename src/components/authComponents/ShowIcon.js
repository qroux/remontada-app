import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const ShowIcon = ({ setHide }) => (
  <Feather name="eye" size={20} color="black" onPress={() => setHide(true)} />
);
