import React, { useState, useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { api } from "../../services/api";
import { context, DEFAULT_VALUE, modalstate, User } from "../../context";
import { FollowersProps, Followers } from "../../components/Followers";
import { Background } from "../../components/Background/Index";
import { ListDivider } from "../../components/ListDivider";
import { ModalView } from "../../components/ModalView";
import { ProfileInformation } from "../ProfileInformation";

export function FollowingScreen() {
  const user = useContext(context);
  const modal = useContext(modalstate);
  const [following, setFollowing] = useState<FollowersProps[]>([]);
  const [clickedUser, setClickedUser] = useState<User>(DEFAULT_VALUE.userData);

  async function handleOpenModal(item: FollowersProps) {
    try {
      const response = await api.get(`/${item.login}`);
      setClickedUser(response.data);
      modal.setOpenModal(true);
    } catch (error) {
      console.log("error");
    }
  }

  async function loadFollowing() {
    try {
      const response = await api.get(`/${user.userData.login}/following`);
      setFollowing(response.data);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    modal.setOpenModal(false);
    loadFollowing();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          data={following}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Followers data={item} onPress={() => handleOpenModal(item)} />
          )}
          contentContainerStyle={{
            paddingRight: 23,
            marginTop: 41,
            paddingBottom: 60,
          }}
          ItemSeparatorComponent={() => <ListDivider />}
        />
        <ModalView visible={modal.openModal}>
          <ProfileInformation data={clickedUser} />
        </ModalView>
      </View>
    </Background>
  );
}
