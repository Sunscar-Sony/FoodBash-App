import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      width: '100%',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    rating: {
      fontSize: 16,
      color: '#888',
    },
  });

  export default styles;