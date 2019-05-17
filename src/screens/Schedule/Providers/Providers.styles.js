import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    borderWidth: 1,
    marginTop: 10
  },
  leftLabel: {
    flex: 1,
    alignSelf: "center",
  },

  label: {
    flex: 1,
    fontSize: 10,
  },

  nextIcon: {
    width: 12,
    height: 12
  },

  labeltext: {
    flex: 1,
    alignSelf: 'flex-start',
    fontWeight: 'bold'
  },

});

export default styles;
