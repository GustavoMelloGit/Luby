import "react-native-gesture-handler";
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { context } from "../context";

import { HomeRoutes } from "./home.routes";

const Stack = createStackNavigator();

export function AppRoutes() {
  const user = useContext(context);
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
