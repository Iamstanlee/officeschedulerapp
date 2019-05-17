import { StyleSheet } from 'react-native';
import { Colors, Fonts, App } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  topTextContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  button: { marginBottom: 10 },
  texttop: {
    marginVertical: 12,
    fontFamily: Fonts.baseFont,
    fontWeight: 'bold',
    color: '#1c1c1c',
    fontSize: 14,
    paddingHorizontal: App.paddingHorizontal
  }
});

export default styles;
