import React, { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { userContext } from "../../context";
import { FlatList, View } from "react-native";
import { Background } from "../../components/Background/Index";
import { Repositories, ReposProps } from "../../components/Repositories";
import { api } from "../../services/api";
import { ListDivider } from "../../components/ListDivider";
import { Loading } from "../../components/Loading";

export function Repos() {
  const user = useContext(userContext);
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [load, setLoad] = useState<boolean>(true);

  async function loadRepos() {
    try {
      const response = await api.get(`${user.userData.login}/repos`);
      setRepos(response.data);
      setLoad(false);
    } catch (err) {
      console.log("error");
    }
  }

  useEffect(() => {
    loadRepos();
  }, [user]);

  return (
    <Background>
      {load ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={repos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Repositories data={item} />}
            contentContainerStyle={{
              paddingRight: 23,
              marginTop: 41,
              paddingBottom: 60,
            }}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      )}
    </Background>
  );
}
