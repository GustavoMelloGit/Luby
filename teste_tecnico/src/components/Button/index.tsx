import React from "react";
import { Text } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = BaseButtonProps & {
  text: string;
};

export function Button({ text, ...rest }: Props) {
  return (
    <BaseButton style={styles.container} {...rest}>
      <Text style={styles.text}>
        {text}
        <AntDesign name="arrowright" size={22} color="black" />
      </Text>
    </BaseButton>
  );
}
