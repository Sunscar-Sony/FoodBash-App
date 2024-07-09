import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f9f9f9",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    flex: 2,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 16,
    color: "#888",
  },
  addToCartButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
  },
  addedToCartButton: {
    backgroundColor: "#fdb44b",
  },
});

export default styles;
