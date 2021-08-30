import React from "react";
import { TextInputProps, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

type Props = TextInputProps & {
  isEmpty: boolean;
};

export function Input({ isEmpty, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...rest} />
      <View style={styles.errorContainer}>
        {isEmpty ? (
          <Text style={styles.error}>Campo obrigatório</Text>
        ) : (
          <Text style={{ position: "absolute" }}></Text>
        )}
      </View>
    </View>
  );
}
