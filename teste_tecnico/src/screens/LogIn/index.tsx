import React, { useContext } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";
import { userContext } from "../../context";
import AwesomeAlert from "react-native-awesome-alerts";

export function LogIn() {
  const user = useContext(userContext);
  const [username, setUsername] = useState("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);

  async function getUserData() {
    if (username) {
      try {
        const response = await api.get(`/${username}`);
        console.log(response.data);
        user.setUserData(response.data);
      } catch (error) {
        setAlert(true);
      }
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <View style={styles.container}>
      <AntDesign name="github" color={theme.colors.secondary} size={100} />
      <Input
        placeholder="Usuário"
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
        isEmpty={isEmpty}
        onFocus={() => setIsEmpty(false)}
      />
      <Button text="ENTRAR" onPress={getUserData} />
      <AwesomeAlert
        show={alert}
        message="Usuário inválido"
        closeOnTouchOutside={false}
        showConfirmButton
        confirmText="Opa, já vou consertar!"
        confirmButtonColor={theme.colors.secondary}
        onConfirmPressed={() => {
          setAlert(false);
        }}
      />
    </View>
  );
}
