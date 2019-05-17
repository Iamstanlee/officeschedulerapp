import { StyleSheet } from 'react-native';
import { App } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerTextAlign: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  textAlign: {
    marginTop: 10,
    marginBottom: 78,
    textAlign: 'center',
    marginHorizontal: App.marginHorizontal + 10
  },
  iconMain: {
    alignSelf: 'center',
    marginTop: 162,
    width: 82,
    height: 55
  }
});

export default styles;
