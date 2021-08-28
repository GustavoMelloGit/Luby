import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

type Props = {
  url: string;
};

export function Avatar({ url }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/profile-pic.png")}
        style={styles.avatar}
      />
    </View>
  );
}
