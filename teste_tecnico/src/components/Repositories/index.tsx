import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { ContentArea } from "../ContentArea";
import { api } from "../../services/api";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export type ReposProps = {
  id: string;
  name: string;
  description?: string;
  stargazers_count: number;
};

type Props = {
  data: ReposProps;
};

export function Repositories({ data }: Props) {
  return (
    <View>
      <ContentArea
        childrenTitle={<Text style={{ fontSize: 20 }}>{data.name}</Text>}
        childrenSubtitle={
          <Text style={{ fontSize: 15 }}>
            {data.description ? `${data.description}` : ""}
          </Text>
        }
      />
      <View style={styles.values}>
        <View style={styles.stargazer}>
          <Feather name="star" size={17} color="yellow" />
          <Text style={styles.stargazer_count}>{data.stargazers_count}</Text>
        </View>
        <View style={styles.status}>
          <Feather name="unlock" size={17} color={theme.colors.unlock} />
          <Feather
            name="lock"
            size={17}
            color={theme.colors.lock}
            style={{ marginLeft: 13 }}
          />
        </View>
      </View>
    </View>
  );
}
