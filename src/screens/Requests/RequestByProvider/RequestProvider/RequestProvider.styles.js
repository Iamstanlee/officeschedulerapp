import { StyleSheet } from 'react-native';
import { Colors, Fonts, App } from '../../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  rowContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: App.paddingHorizontal,
    height: 56,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  columnText: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  leftLabel: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: Fonts.baseFont
  },
  coverageContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  coverageText: {
    marginVertical: 12,
    fontFamily: Fonts.baseFont,
    fontWeight: 'bold',
    color: '#1c1c1c',
    fontSize: 16,
    paddingHorizontal: App.paddingHorizontal
  },
  divider: {
    backgroundColor: Colors.mainBackground,
    height: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  }
});

export default styles;
