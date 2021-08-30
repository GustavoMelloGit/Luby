import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Background } from "../../components/Background/Index";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Avatar } from "../../components/Avatar";
import { ContentArea } from "../../components/ContentArea";
import { userContext, DEFAULT_VALUE, User } from "../../context";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: User;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ProfileInformation({ data, setModalState }: Props) {
  const user = useContext(userContext);
  const navigation = useNavigation();

  async function handleSave() {
    user.setUserData(DEFAULT_VALUE.userData);
    user.setUserData(data);
    setModalState(false);
  }

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.nickNameWrapper}>
          <Text style={styles.nickName}>{`#${data.login}`}</Text>
        </View>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => {
              setModalState(false);
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
              uri: `${data.avatar_url}`,
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
          childrenTitle={<Text>{data.name}</Text>}
          childrenSubtitle={
            <Text>
              {data.email} {"\n"}
              {data.location}
            </Text>
          }
        />

        <View style={styles.userInformation}>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{data.followers}</Text>
            <Text style={styles.subtitle}>Seguidores</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{data.following}</Text>
            <Text style={styles.subtitle}>Seguindo</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>{data.public_repos}</Text>
            <Text style={styles.subtitle}>Repos</Text>
          </View>
        </View>
        <View style={styles.userBio}>
          <ContentArea
            childrenTitle={<Text>BIO</Text>}
            childrenSubtitle={<Text>{data.bio}</Text>}
          />
        </View>
      </View>
    </Background>
  );
}
