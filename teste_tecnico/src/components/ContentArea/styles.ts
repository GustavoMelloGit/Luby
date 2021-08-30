import { Inter_100Thin } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: theme.colors.title,
    textTransform: "uppercase",
    fontSize: 26,
    fontFamily: theme.fonts.title700,
  },
  subtitle: {
    fontFamily: theme.fonts.light300,
    fontSize: 15,
    color: theme.colors.title,
    marginRight: 20,
  },
  subtitleContainer: {
    maxWidth: 320,
  },
});
