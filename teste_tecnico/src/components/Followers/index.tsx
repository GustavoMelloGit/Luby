import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { ButtonProps } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { User } from "../../context";
import { Home } from "../../screens/Home";
import { ProfileInformation } from "../../screens/ProfileInformation";
import { Avatar } from "../Avatar";
import { Marker } from "../Marker";
import { ModalView } from "../ModalView";
import { styles } from "./styles";
import { modalstate } from "../../context";

export type FollowersProps = {
  login: string;
  avatar_url: string;
  id: string;
};

type Props = {
  data: FollowersProps;
};

export function Followers({ data }: Props) {
  const modal = useContext(modalstate);

  function handleCloseModal() {
    modal.setOpenModal(false);
  }

  return (
    <TouchableOpacity onPress={() => modal.setOpenModal(true)}>
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
      <ModalView visible={modal.openModal} handleClose={handleCloseModal}>
        <ProfileInformation {...data} />
      </ModalView>
    </TouchableOpacity>
  );
}
