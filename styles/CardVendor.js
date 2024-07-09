import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: "left",
  },
  image: {
    width: "90%",
    alignSelf: "center",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    color: "#888",
  },
});

export default styles;

