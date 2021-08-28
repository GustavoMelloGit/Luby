import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent: "center",

        backgroundColor: theme.colors.secondary,
        color: theme.colors.blackText,
        fontFamily: theme.fonts.title700,
        
        marginTop: 20,
        width: 300,
        height: 40,
        borderRadius: 8,
    },
    text:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '700',
    },
});