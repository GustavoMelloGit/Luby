import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    header:{
        backgroundColor: theme.colors.navbar,
        height: 150,
    },
    headerContent:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Constants.statusBarHeight + 19,
    },
    exit:{
        display: "flex",
        flexDirection: "row",
        marginRight: 19,
    },
    nickName:{
        color: '#fff',
        fontFamily: theme.fonts.title700,
        fontSize: 17,
        marginLeft: 11,
    },
    exitLabel:{
        color: '#fff',
        fontFamily: theme.fonts.light300,
        fontSize: 17,
        marginRight: 12,
    },
    profile:{
        alignSelf: "center",
        bottom: -10,
    },
    content:{
        marginTop: 80,
    },
    userInformation:{
        flexDirection: "row",
        backgroundColor: theme.colors.lightGrey,
        marginTop: 44,
        justifyContent: "center",
        paddingTop: 12,
        paddingBottom: 12,
    },
    userInformationInner:{
        alignItems: "center",
        flex: 1,
    },
    title:{
        color: theme.colors.title,
        fontFamily: theme.fonts.title700,
        fontSize: 40
    },
    subtitle:{
        color: theme.colors.title,
        fontFamily: theme.fonts.light300
    },
    userBio:{
        marginTop: 53,
    }
});