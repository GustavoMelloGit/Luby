import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { LogIn } from "./src/screens/LogIn";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
import { ContextProvider } from "./src/context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
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
