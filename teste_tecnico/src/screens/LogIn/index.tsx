import React from "react";
import { View, Text } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import Github from "../../../assets/github.svg";

export function LogIn() {
  return (
    <Background>
      <View style={styles.container}>
        <Text>Testando</Text>
      </View>
    </Background>
  );
}
