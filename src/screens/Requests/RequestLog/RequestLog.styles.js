import { StyleSheet } from "react-native";
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
    text: {
        fontFamily: Fonts.baseFont,
        color: "#1c1c1c",
        fontSize: 16,
        paddingHorizontal: App.paddingHorizontal
    },
    bold: {
        fontWeight: "bold"
    },
    textContainer: {
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    columnContainer: {
        width: "100%",
        paddingVertical: 10,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "flex-start",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    }
});

export default styles;
