import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { LogIn } from "./src/screens/LogIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return <LogIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
  },
});
