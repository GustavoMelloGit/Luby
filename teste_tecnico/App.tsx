import React from "react";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { ContextProvider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import { Background } from "./src/components/Background/Index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer>
      <ContextProvider>
        <Background>
          <Routes />
        </Background>
      </ContextProvider>
    </NavigationContainer>
  );
}
