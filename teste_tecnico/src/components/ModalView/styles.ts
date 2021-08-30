import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    overlay:{
        flex:1,
        backgroundColor: theme.colors.primary,
    },
    container:{
        flex: 1,
    }
});