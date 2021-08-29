import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userInfo:{
        width: "50%",
        flexDirection: "row",
        alignItems: "center"
    },
    login:{
        color: '#fff',
        fontSize: 16,
        marginLeft: 32,
    },
});