import React from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <TextInput style={styles.input} {...rest} />;
}
