import React from "react";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";

const PronoIcon = ({ focused, color }) => {
  return <Entypo name="new" size={20} color={color} />;
};

const BankrollIcon = ({ focused, color }) => {
  return <FontAwesome5 name="piggy-bank" size={20} color={color} />;
};

const AccountIcon = ({ focused, color }) => {
  return <AntDesign name="setting" size={20} color={color} />;
};

export { PronoIcon, BankrollIcon, AccountIcon };
