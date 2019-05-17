import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/GlobalStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground
  },
  headerText: {
    fontWeight: 'bold'
  },

  texttop: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 15
  },

  rowContainer: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    height: 60,
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.listRowSpacer,
    marginTop: 10
  },
  leftLabel: {
    flex: 1,
    alignSelf: "center",
  },


});

export default styles;
