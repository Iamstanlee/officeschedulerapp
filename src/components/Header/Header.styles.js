import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Colors } from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "#d0d4d9",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        paddingTop: getStatusBarHeight(),
        height:
            Platform.select({
                android: 56,
                default: 44
            }) + getStatusBarHeight()
    },
    titleTextContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    leftButtonContainer: {
        width: 64,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    rightButtonContainer: {
        width: 64,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    title: {
        color: Colors.headerTitle,
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 20,
        marginTop: 3,
        textAlign: "center"
    },
    iconFilter: {
        width: 22,
        height: 20
    },
    arrowBack: {
        height: 18,
        width: 10
    },
    iconClose: {
        height: 18,
        width: 18
    },
    subtitle: {
        fontSize: 13,
        lineHeight: 14,
        color: Colors.black,
        fontWeight: "500",
        textTransform: "uppercase"
    }
});

export default styles;
