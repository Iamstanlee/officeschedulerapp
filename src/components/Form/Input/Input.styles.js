import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    textAlign: 'left'
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f5fa',
    height: 50,
    borderRadius: 3,
    overflow: 'hidden'
  },
  inputStyle: {
    alignSelf: 'center',
    color: '#1a1b1d',
    fontSize: 15.5,
    paddingLeft: 2,
    fontWeight: '400'
  },
  labelStyle: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
    paddingBottom: 4
  }
});

export default styles;
