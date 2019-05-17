import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row'
    },

    text: {
        margin: 10
    },

    image: {
        alignSelf: 'center'
    },

    messageContainer: {
        width: '70%',
        backgroundColor: Colors.blue,
        borderRadius: 25,
        padding: 10,
        marginTop: 30,
        alignSelf: 'center',
        paddingHorizontal: 20
    },
    faceIdText: {
        color: 'white'
    },

    rowContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        height: 60,
        alignItems: "center"
    },
    seperator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "black"
    },

    leftLabel: {
        flex: 1,
        alignSelf: "center",
        fontWeight: 'bold'
    },

    nextIcon: {
        width: 12,
        height: 12,
        alignSelf: "center",
    },


});

export default styles;
