import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../../components/Avatar";
import { ContentArea } from "../../components/ContentArea";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { userContext, DEFAULT_VALUE } from "../../context";

const Tab = createBottomTabNavigator();

export function Home() {
  const user = useContext(userContext);

  async function handleLogOut() {
    user.setUserData(DEFAULT_VALUE.userData);
  }
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.nickName}>{`#${user.userData.login}`}</Text>
          <View style={styles.exit}>
            <Text style={styles.exitLabel}>Sair</Text>
            <TouchableOpacity onPress={handleLogOut}>
              <Ionicons name="exit-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Background>
        <View style={styles.profile}>
          <Avatar
            source={{
              uri: `${user.userData.avatar_url}`,
            }}
            style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
            container={{
              containerHeight: 115,
              containerWidth: 115,
            }}
          />
        </View>
        <View style={styles.content}>
          <ContentArea
            childrenTitle={
              <Text style={{ textTransform: "uppercase" }}>
                {user.userData?.name}
              </Text>
            }
            childrenSubtitle={
              <Text>
                {user.userData?.email} {"\n"}
                {user.userData?.location}
              </Text>
            }
          />

          <View style={styles.userInformation}>
            <View style={styles.userInformationInner}>
              <Text style={styles.title}>{user.userData.followers}</Text>
              <Text style={styles.subtitle}>Seguidores</Text>
            </View>
            <View style={styles.userInformationInner}>
              <Text style={styles.title}>{user.userData.following}</Text>
              <Text style={styles.subtitle}>Seguindo</Text>
            </View>
            <View style={styles.userInformationInner}>
              <Text style={styles.title}>{user.userData.public_repos}</Text>
              <Text style={styles.subtitle}>Repos</Text>
            </View>
          </View>
          <View style={styles.userBio}>
            <ContentArea
              childrenTitle={<Text>BIO</Text>}
              childrenSubtitle={<Text>{user.userData.bio}</Text>}
            />
          </View>
        </View>
      </Background>
    </>
  );
}
