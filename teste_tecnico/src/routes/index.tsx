import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { LogIn } from "../screens/LogIn";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const user = "";
  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <LogIn />}
    </NavigationContainer>
  );
}
