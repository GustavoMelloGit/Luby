import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { theme } from "../global/styles/theme";
import { Repos } from "../screens/Repos";
import { Home } from "../screens/Home";
import { context } from "../context";

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
  const user = useContext(context);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.inactiveColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Repos"
        component={Repos}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="github" size={24} color={color} />
          ),
          headerStyle: {
            backgroundColor: theme.colors.navbar,
          },
          headerTitleStyle: {
            color: "#fff",
            fontSize: 17,
            fontFamily: theme.fonts.title700,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 17,
          },
          headerTitle: `${user.userData.public_repos} repositórios`,
        }}
      />
      <Tab.Screen
        name="Seguidores"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Seguindo"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
