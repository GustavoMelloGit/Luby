import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../global/styles/theme";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Background } from "../components/Background/Index";
import { userContext } from "../context";
import { FollowersScreen } from "../screens/FollowersScreen";
import { FollowingScreen } from "../screens/FollowingScreen";
import { Home } from "../screens/Home";
import { Repos } from "../screens/Repos";

const Tab = createBottomTabNavigator();

export function HomeRoutes() {
  const navigation = useNavigation();
  const user = useContext(userContext);
  return (
    <Background>
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
          component={FollowersScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
              marginLeft: 17,
            },
            headerTitle: `${user.userData.followers} seguidores`,
          }}
        />
        <Tab.Screen
          name="Seguindo"
          component={FollowingScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="users" size={24} color={color} />
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
              marginLeft: 17,
            },
            headerTitle: `${user.userData.following} seguindo`,
          }}
        />
      </Tab.Navigator>
    </Background>
  );
}
