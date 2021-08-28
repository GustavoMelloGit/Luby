import React from "react";
import { View } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function LogIn() {
  function handleLogin() {}
  return (
    <Background>
      <View style={styles.container}>
        <AntDesign name="github" color={theme.colors.secondary} size={100} />
        <Input placeholder="Usuário" />
        <Button text="ENTRAR" />
      </View>
    </Background>
  );
}
