import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Text } from "react-native-svg";
import { Home } from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Repos"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Feather name="github" size={24} color="black" />,
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Seguidores"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Feather name="users" size={24} color="black" />,
          tabBarActiveTintColor: "black",
        }}
      />
      <Tab.Screen
        name="Seguindo"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => {
            return <Feather name="users" size={24} color="black" />;
          },
          tabBarActiveTintColor: "black",
        }}
      />
    </Tab.Navigator>
  );
}
