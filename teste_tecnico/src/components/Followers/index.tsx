import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "../Avatar";
import { Marker } from "../Marker";
import { styles } from "./styles";

export type FollowersProps = {
  login: string;
  avatar_url: string;
  id: string;
};

type Props = {
  data: FollowersProps;
};

export function Followers({ data }: Props) {
  function handleClick() {}
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Marker />
          <Avatar
            source={{ uri: `${data.avatar_url}` }}
            style={{
              width: 59,
              height: 59,
              borderRadius: 59 / 2,
            }}
            container={{
              containerHeight: 64,
              containerWidth: 64,
            }}
          />
          <Text style={styles.login}>{`#${data.login}`}</Text>
        </View>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
