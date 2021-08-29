import React, { useContext } from "react";
import { View } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { context } from "../../context";

export function LogIn() {
  const user = useContext(context);
  const [username, setUsername] = useState("");

  async function getUserData() {
    try {
      const response = await api.get(`/${username}`);
      user.setUserData(response.data);
    } catch (error) {
      console.log("errou");
    }
  }

  return (
    <View style={styles.container}>
      <AntDesign name="github" color={theme.colors.secondary} size={100} />
      <Input
        placeholder="Usuário"
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button text="ENTRAR" onPress={getUserData} />
    </View>
  );
}
