import { StyleSheet } from 'react-native';
import { Colors, App, Fonts } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.listRowSpacer,
    borderRadius: 5,
    padding: 12,
    marginTop: 10,
    marginLeft: '5%',
    marginRight: '5%'
  },
  titleText: {
    marginTop: 10,
    paddingHorizontal: 20
  },
  reminderTxt: {
    alignSelf: 'flex-end',
    paddingRight: 15,
    marginTop: 10
  }
});

export default styles;
