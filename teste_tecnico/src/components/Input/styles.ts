import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  input: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    borderRadius: 8,
    paddingLeft: 20,
  },
  errorContainer: {
    position: "absolute",
    left: "50%",
  },
  error: {
    color: theme.colors.error,
    top: "50%",
    right: 10,
    fontSize: 14,
    fontFamily: theme.fonts.light300,
  },
});
