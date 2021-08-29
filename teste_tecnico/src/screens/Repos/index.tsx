import React, { useContext, useEffect, useState } from "react";
import { styles } from "./styles";
import { context } from "../../context";
import { FlatList, View } from "react-native";
import { Background } from "../../components/Background/Index";
import { Repositories, ReposProps } from "../../components/Repositories";
import { api } from "../../services/api";
import { ListDivider } from "../../components/ListDivider";

export function Repos() {
  const user = useContext(context);
  const [repos, setRepos] = useState<ReposProps[]>([]);

  async function loadRepos() {
    try {
      const response = await api.get(`${user.userData.login}/repos`);
      setRepos(response.data);
    } catch (err) {
      console.log("error");
    }
  }

  useEffect(() => {
    loadRepos();
  }, []);

  return (
    <Background>
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
    </Background>
  );
}
