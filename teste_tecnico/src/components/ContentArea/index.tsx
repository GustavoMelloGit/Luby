import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { Marker } from "../Marker";
import { styles } from "./styles";

type Props = {
  childrenTitle: ReactNode;
  childrenSubtitle?: ReactNode;
};

export function ContentArea({ childrenTitle, childrenSubtitle }: Props) {
  return (
    <View style={styles.container}>
      <Marker />
      <View>
        <Text style={styles.title}>{childrenTitle}</Text>
        <Text style={styles.subtitle}>{childrenSubtitle}</Text>
      </View>
    </View>
  );
}
