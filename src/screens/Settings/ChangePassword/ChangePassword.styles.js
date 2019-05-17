import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  formContainer: {
    backgroundColor: Colors.white,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer
  },
  instructionsText: {
    fontSize: 14,
    color: '#1c1c1c',
    marginTop: 15,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  instructionsTextBold: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24
  }
});

export default styles;
