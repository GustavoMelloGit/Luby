import React, { useState, useContext, useEffect } from "react";
import { View, FlatList, Button } from "react-native";
import { styles } from "./styles";
import { api } from "../../services/api";
import { context, ModalStateProvider } from "../../context";
import { FollowersProps, Followers } from "../../components/Followers";
import { Background } from "../../components/Background/Index";
import { ListDivider } from "../../components/ListDivider";

export function FollowersScreen() {
  const user = useContext(context);
  const [followers, setFollowers] = useState<FollowersProps[]>([]);

  async function loadFollowers() {
    try {
      const response = await api.get(`/${user.userData.login}/followers`);
      setFollowers(response.data);
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    loadFollowers();
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          data={followers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Followers data={item} />}
          contentContainerStyle={{
            paddingRight: 23,
            marginTop: 41,
            paddingBottom: 60,
          }}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  );
}
