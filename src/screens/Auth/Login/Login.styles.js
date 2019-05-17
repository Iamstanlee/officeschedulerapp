import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 236,
    height: 35,
    marginTop: 120,
    marginBottom: 70,
    alignSelf: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5a66',
    marginTop: 20,
    marginBottom: 20
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20
  },
  rightTitle: {
    alignSelf: 'stretch',
    textAlign: 'right',
    marginLeft: 20
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
  faceIdContainer: {
    width: '70%',
    backgroundColor: Colors.blue,
    borderRadius: 3,
    padding: 10,
    marginTop: 30
  },
  faceIdText: {
    color: 'white'
  },
  forgotPasswordContainer: {
    textAlign: 'left',
    paddingTop: 18,
    marginBottom: 20,
    marginLeft: 20
  },
  forgotPasswordText: {
    color: Colors.blue,
    fontWeight: '500'
  },
  iconTouchId: {
    width: 45,
    height: 45
  },
  alternateLoginsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20
  },
  leftContainer: {
    width: '50%',
    alignItems: 'center',
  },
  rightContainer: {
    width: '50%',
    alignItems: 'center'
  },
  buttonContainer: {
    borderRadius: 8,
    borderColor: '#cad1db',
    borderWidth: 0.5,
    alignItems: 'center',
    padding: 10
  },
  useText: {
    fontSize: 14,
    color: '#373f4a',
    marginTop: 10,
  }
});

export default styles;
