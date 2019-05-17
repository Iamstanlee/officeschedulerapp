import { StyleSheet } from 'react-native';
import * as Theme from '../../constants/GlobalStyles';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: Theme.Colors.blue,
    marginHorizontal: 20,
    height: 46,
    marginTop: 25
  },
  textStyle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 2
  },
  lightgray: { backgroundColor: Theme.Colors.lightgray }
});

export default styles;
