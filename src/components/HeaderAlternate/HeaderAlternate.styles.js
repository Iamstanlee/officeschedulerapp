import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 26,
        marginHorizontal: 16,
        height: Platform.OS === "ios" ? 52 : 56
    }
});

export default styles;
