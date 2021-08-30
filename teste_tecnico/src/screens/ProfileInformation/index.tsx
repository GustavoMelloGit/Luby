import React, { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, ModalProps } from "react-native";
import { Background } from "../../components/Background/Index";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Avatar } from "../../components/Avatar";
import { ContentArea } from "../../components/ContentArea";
import { context, DEFAULT_VALUE, User } from "../../context";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { modalstate } from "../../context";

type Props = {
  login: string;
};

export function ProfileInformation({ login }: Props) {
  const user = useContext(context);
  const modal = useContext(modalstate);
  const [clickedUser, setClickedUser] = useState<User>(DEFAULT_VALUE.userData);
  const navigation = useNavigation();

  async function getUserData() {
    try {
      const response = await api.get(`/${login}`);
      const clickedUser = response;
      setClickedUser(response.data);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    getUserData();
  });

  async function handleSave() {
    user.setUserData(clickedUser);
    navigation.goBack();
  }
  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.nickNameWrapper}>
          <Text style={styles.nickName}>{`#${clickedUser?.login}`}</Text>
        </View>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => {
              modal.setOpenModal(false);
            }}
          >
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.exit}>
            <Text style={styles.exitLabel}>Salvar</Text>
            <TouchableOpacity onPress={handleSave}>
              <Ionicons
                name="enter-outline"
                size={24}
                color={theme.colors.save}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profile}>
          <Avatar
            source={{
              uri: `${clickedUser.avatar_url}`,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            container={{
              containerHeight: 115,
              containerWidth: 115,
            }}
          />
        </View>
      </View>

      <View style={styles.content}>
        <ContentArea
          childrenTitle={<Text>{clickedUser?.name}</Text>}
          childrenSubtitle={
            <Text>
              {clickedUser?.email} {"\n"}
              {clickedUser?.location}
            </Text>
          }
        />

        <View style={styles.userInformation}>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{clickedUser?.followers}</Text>
            <Text style={styles.subtitle}>Seguidores</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{clickedUser?.following}</Text>
            <Text style={styles.subtitle}>Seguindo</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{clickedUser?.public_repos}</Text>
            <Text style={styles.subtitle}>Repos</Text>
          </View>
        </View>
        <View style={styles.userBio}>
          <ContentArea
            childrenTitle={<Text>BIO</Text>}
            childrenSubtitle={<Text>{clickedUser?.bio}</Text>}
          />
        </View>
      </View>
    </Background>
  );
}
