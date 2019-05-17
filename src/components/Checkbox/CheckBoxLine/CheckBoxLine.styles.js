import { StyleSheet } from "react-native";
import { Colors, Fonts, App } from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
    rowContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: App.paddingHorizontal,
        height: 56,
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    },

    leftLabel: {
        flex: 1,
        flexWrap: "wrap",
        color: Colors.black,
        marginLeft: 6,
        fontSize: 16,
        fontFamily: Fonts.baseFont
    }
});

export default styles;
