import React, { FormEvent } from "react";
import { Alert, View } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";

export function LogIn() {
  const [username, setUsername] = useState("");

  function handleLogin() {
    {
      username ? console.log(username) : Alert.alert("Campo obrigatório");
    }
  }
  return (
    <Background>
      <View style={styles.container}>
        <AntDesign name="github" color={theme.colors.secondary} size={100} />
        <Input
          placeholder="Usuário"
          defaultValue={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Button text="ENTRAR" onPress={handleLogin} />
      </View>
    </Background>
  );
}
