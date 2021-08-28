import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { LogIn } from "../screens/LogIn";
import { AppRoutes } from "./app.routes";
import { context } from "../context";

export function Routes() {
  const user = useContext(context);
  return (
    <NavigationContainer>
      {user.userData.name === " " ? <AppRoutes /> : <LogIn />}
    </NavigationContainer>
  );
}
