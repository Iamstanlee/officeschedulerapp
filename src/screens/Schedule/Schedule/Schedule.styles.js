import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  calendar: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  navContainer: {
    position: 'absolute',
    bottom: 14,
    alignSelf: 'center',
    zIndex: 999,
    flexDirection: 'row'
  },
  buttonText: {
    alignSelf: 'center',
    color: '#5d9853',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 36,
    textTransform: 'uppercase'
  },
  scheduleContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 60,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer,
    paddingTop: 4
  },
  scheduleContainerFirst: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.listRowSpacer
  },
  scheduleRowLeft: {
    flexDirection: 'column'
  },
  providerNameText: {
    fontWeight: '700',
    fontSize: 14.5,
    color: '#1c1c1c',
    letterSpacing: 0.1,
    paddingBottom: 2
  },
  shiftTimeText: {
    fontWeight: '300',
    fontSize: 12.5,
    color: '#787d82',
    letterSpacing: 0.1
  },
  providerLocationText: {
    marginTop: 4,
    right: 14,
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
    letterSpacing: 0.1
  },
  scheduleRowRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatIcon: {
    width: 20,
    height: 20,
    marginTop: 4
  },
  scheduleDateHeadingText: {
    fontWeight: 'bold',
    color: '#1c1c1c',
    fontSize: 15,
    marginTop: 16,
    marginBottom: 10,
    paddingHorizontal: 15,
    letterSpacing: 0
  }
});

export default styles;
