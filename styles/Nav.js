import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
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
