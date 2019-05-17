import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: '#1a1b1d',
    fontSize: 15.5,
    marginLeft: 3,
    fontWeight: '400'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10
  },
  inputInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f5fa',
    height: 50,
    borderRadius: 3
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  }
});

export default styles;
