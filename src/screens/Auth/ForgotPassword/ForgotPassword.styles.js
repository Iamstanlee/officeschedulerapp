import { StyleSheet } from 'react-native';
import { Colors, App } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: Colors.blue,
    marginHorizontal: 20,
    height: 46,
    marginTop: 25
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '500'
  },
  headerTextAlign: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  forgotPasswordTextAlign: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: App.marginHorizontal + 10
  },
  iconLock: {
    alignSelf: 'center',
    marginTop: 60,
    width: 56,
    height: 77
  },
  input: {
    flex: 1,
    color: '#1a1b1d',
    fontSize: 15.5,
    marginLeft: 3,
    fontWeight: '500'
  },
  inputIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10
  },
  inputIconInner: {
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
  },
  iconBackArrow: {
    height: 18,
    width: 23,
    marginTop: 10
  }
});

export default styles;
