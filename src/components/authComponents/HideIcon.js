import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const HideIcon = ({ setHide }) => (
  <Feather
    name="eye-off"
    size={20}
    color="black"
    onPress={() => setHide(false)}
  />
);
