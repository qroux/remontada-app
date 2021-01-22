import { StatusBar } from "react-native";
import { Spacing } from "./main";

export const Common = {
  fullPage: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // borderColor: "black",
    // borderWidth: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
    padding: Spacing.medium,
  },
};
