import React, { useState, useContext, useEffect } from "react";
import { View, FlatList } from "react-native";
import { api } from "../../services/api";
import { userContext, DEFAULT_VALUE, User } from "../../context";
import { FollowersProps, Followers } from "../../components/Followers";
import { Background } from "../../components/Background/Index";
import { ListDivider } from "../../components/ListDivider";
import { ModalView } from "../../components/ModalView";
import { ProfileInformation } from "../ProfileInformation";
import { Loading } from "../../components/Loading";

type Props = {
  screenType: string;
};

export function Follow({ screenType }: Props) {
  const user = useContext(userContext);
  const [following, setFollowing] = useState<FollowersProps[]>([]);
  const [clickedUser, setClickedUser] = useState<User>(DEFAULT_VALUE.userData);
  const [modalState, setModalState] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true);

  async function handleOpenModal(item: FollowersProps) {
    try {
      const response = await api.get(`/${item.login}`);
      setClickedUser(response.data);
      setModalState(true);
    } catch (error) {
      console.log("error");
    }
  }

  async function loadFollowing() {
    try {
      const response = await api.get(`/${user.userData.login}/${screenType}`);
      setFollowing(response.data);
      setLoad(false);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    loadFollowing();
  }, [user]);

  return (
    <Background>
      {load ? (
        <Loading />
      ) : (
        <View>
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
          <ModalView visible={modalState}>
            <ProfileInformation
              data={clickedUser}
              setModalState={setModalState}
            />
          </ModalView>
        </View>
      )}
    </Background>
  );
}
