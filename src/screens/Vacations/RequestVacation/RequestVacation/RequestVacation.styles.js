import { StyleSheet } from 'react-native';
import { Colors, Fonts, App } from '../../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  rowContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: App.paddingHorizontal,
    height: 60,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  columnText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  leftLabel: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.baseFont
  },
  divider: {
    width: '100%',
    height: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  }
});

export default styles;
