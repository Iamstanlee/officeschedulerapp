import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/GlobalStyles';

const styles = StyleSheet.create({
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

  texttop: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 15
  },

  rowContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    height: 60,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 10
  },
  leftLabel: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 6
  }
});

export default styles;
