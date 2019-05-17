import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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

    titleText: {
        marginTop: 10,
        paddingHorizontal: 20
    },

    formstyles: {
        marginTop: 10,
        borderWidth: 1,
        marginLeft: '5%',
        marginRight: '5%'
    },

    reminderTxt: {
        alignSelf: 'flex-end',
        paddingRight: 15,
        marginTop: 10
    }
});

export default styles;
