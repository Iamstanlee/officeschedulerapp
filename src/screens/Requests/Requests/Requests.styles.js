import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, App } from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground
    },
    texttop: {
        marginVertical: 12,
        fontFamily: Fonts.baseFont,
        fontWeight: "bold",
        color: "#1c1c1c",
        fontSize: 16,
        paddingHorizontal: App.paddingHorizontal
    },
    top: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    },
    rowContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: App.paddingHorizontal,
        height: 60,
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    },
    leftLabel: {
        flex: 1,
        fontSize: 16,
        alignSelf: "center",
        fontFamily: Fonts.baseFont,
        color: "#1c1c1c"
    },
    rightLabel: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    divider: {
        backgroundColor: Colors.mainBackground,
        height: 50,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    },
    notificationContainer: {
        backgroundColor: Colors.orange,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginHorizontal: App.marginHorizontal
    },
    notificationText: {
        color: Colors.white,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default styles;
