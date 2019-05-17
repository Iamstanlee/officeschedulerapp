import { StyleSheet } from 'react-native';
import { Colors, Fonts, App } from '../../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  texttop: {
    marginVertical: 12,
    fontFamily: Fonts.baseFont,
    fontWeight: 'bold',
    color: '#1c1c1c',
    fontSize: 16,
    paddingHorizontal: App.paddingHorizontal
  },
  top: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.listRowSpacer
  },
  rowContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: App.paddingHorizontal,
    height: 56,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  leftLabel: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: Fonts.baseFont,
    color: '#1c1c1c'
  }
});

export default styles;
