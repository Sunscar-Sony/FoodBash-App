import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
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
