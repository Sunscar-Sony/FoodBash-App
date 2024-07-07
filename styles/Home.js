import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#fff',
    },
    searchBar: {
      flex: 1,
      height: 40,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
    profile: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    mainHeading: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 20,
    },
    vendorList: {
      alignItems: 'center',
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderColor: '#ddd',
    },
    navItem: {
      fontSize: 16,
      color: '#333',
    },
  });
  

  export default styles;