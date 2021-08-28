import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Background } from "../../components/Background/Index";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../../components/Avatar";
import { ContentArea } from "../../components/ContentArea";
import { Navbar } from "../../components/Navbar";

export function Home() {
  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.nickName}>#GustavoMelloGit</Text>
          <View style={styles.exit}>
            <Text style={styles.exitLabel}>Sair</Text>
            <TouchableOpacity>
              <Ionicons name="exit-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profile}>
          <Avatar url="https://i.stack.imgur.com/34AD2.jpg" />
        </View>
      </View>

      <View style={styles.content}>
        <ContentArea
          childrenTitle={<Text>Gustavo Mello</Text>}
          childrenSubtitle={<Text>gugamello497@gmail.com {"\n"}Divino/MG</Text>}
        />

        <View style={styles.userInformation}>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>32</Text>
            <Text style={styles.subtitle}>Seguidores</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>32</Text>
            <Text style={styles.subtitle}>Seguindo</Text>
          </View>
          <View style={styles.userInformationInner}>
            <Text style={styles.title}>10</Text>
            <Text style={styles.subtitle}>Repos</Text>
          </View>
        </View>
        <View style={styles.userBio}>
          <ContentArea
            childrenTitle={<Text>BIO</Text>}
            childrenSubtitle={
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, quam voluptatibus reiciendis aliquam obcaecati eius
                saepe velit eos dicta adipisci.
              </Text>
            }
          />
        </View>
      </View>
    </Background>
  );
}
