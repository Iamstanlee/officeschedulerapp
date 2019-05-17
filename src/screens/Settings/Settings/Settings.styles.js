import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainBackground
    },
    text: {
        marginTop: 15,
        fontSize: 14,
        paddingHorizontal: 15
    },
    rowContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        height: 60,
        alignItems: "center",
        borderBottomColor: Colors.listRowSpacer,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    leftLabel: {
        flex: 1,
        alignSelf: "center",
        fontWeight: "600"
    },
    signOutButtonContainer: {
        paddingHorizontal: 20,
        backgroundColor: "#8795a8",
        borderRadius: 3,
        padding: 8,
        marginTop: 20,
        alignSelf: "center"
    },
    signOutButtonText: {
        color: "white",
        fontWeight: "500",
        fontSize: 13,
        letterSpacing: -0.15
    }
});

export default styles;
