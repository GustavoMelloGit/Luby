import React from "react";
import { Image, ImageProps, View } from "react-native";
import { userContext } from "../../context";
import { useContext } from "react";

type ContainerProps = {
  containerWidth: number;
  containerHeight: number;
};
type Props = ImageProps & {
  container: ContainerProps;
};

export function Avatar({ container, ...rest }: Props) {
  const user = useContext(userContext);
  return (
    <View
      style={{
        width: container.containerWidth,
        height: container.containerHeight,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: container.containerHeight / 2,
      }}
    >
      <Image {...rest} />
    </View>
  );
}
