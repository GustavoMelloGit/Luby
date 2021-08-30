import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { userContext } from "../context";

import { HomeRoutes } from "./home.routes";

const Stack = createStackNavigator();

export function AppRoutes() {
  const user = useContext(userContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
