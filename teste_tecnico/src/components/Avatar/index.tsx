import React from "react";
import { Image, ImageProps, View } from "react-native";
import { styles } from "./styles";
import { context } from "../../context";
import { useContext } from "react";

type Props = ImageProps;

export function Avatar({ ...rest }: Props) {
  const user = useContext(context);
  return (
    <View style={styles.container}>
      <Image {...rest} />
    </View>
  );
}
