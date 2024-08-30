import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  navItem: {
    textAlign: 'center',
    fontSize: 13,
    color: '#333',
  },
  navIcon: {
    alignSelf: 'center',
  },

});

export default styles;
