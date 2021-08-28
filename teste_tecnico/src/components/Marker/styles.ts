import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.secondary,
        position: "relative",
        height: 42,
        width: 20,
        borderRadius: 8,
        left: -10,
    }
});