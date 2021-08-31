import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  values: {
    flexDirection: "row",
  },
  stargazer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 13,
  },
  stargazer_count: {
    fontFamily: theme.fonts.light300,
    fontSize: 15,
    color: "#fff",
    marginLeft: 5,
  },
  status: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
});
