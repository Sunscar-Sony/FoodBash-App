import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 30,
      marginLeft: 20,
      color: '#000',
    },
    content: {
        marginTop: 10,
      flex: 1,
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderRadius: 15,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#fff', 
    },
    searchButton: {
        width: 100,
        height: 40,
      backgroundColor: '#fdb44b',
      paddingHorizontal: 20,
      justifyContent: "center",
      paddingVertical: 10,
      borderRadius: 15,
      alignItems: 'center', 
    },
    searchButtonText: {
        fontSize: 16,
      color: '#000',
    },
  });

export default styles;
