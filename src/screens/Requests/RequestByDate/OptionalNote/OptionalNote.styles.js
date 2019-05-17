import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.mainBackground
    },

    rowContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        height: 56,
        alignItems: "center",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.listRowSpacer
    },
    texttop: {
        marginVertical: 12,
        fontFamily: Fonts.baseFont,
        fontWeight: "bold",
        color: "#1c1c1c",
        fontSize: 14,
        paddingHorizontal: 15
    },
    leftLabel: {
        flex: 1,
        flexWrap: "wrap",
        color: Colors.black,
        marginLeft: 6,
        fontSize: 16,
        fontFamily: Fonts.baseFont
    },
    buttonContainer: {
        width: "80%",
        backgroundColor: Colors.blue,
        borderRadius: 2,
        marginVertical: 40,
        padding: 8,
        alignSelf: "center",
        paddingHorizontal: 10
    },
    buttonText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default styles;
