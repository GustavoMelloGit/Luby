import React from "react";
import { ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
import { Background } from "../Background/Index";
import { styles } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
  handleClose: () => void;
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest} statusBarTranslucent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>{children}</Background>
        </View>
      </View>
    </Modal>
  );
}
