import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeRoutes } from "./home.routes";

const Stack = createStackNavigator();

export function AppRoutes() {
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
