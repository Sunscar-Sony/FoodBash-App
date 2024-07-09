import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  cartItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "500",
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
});

export default styles;
