import React from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const CartScreen = ({ route }) => {
  const cart = route?.params?.cart || []; // Safely access cart with default empty array

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={styles.headerText}>Cart Screen</Text>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
            )}
          />
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your cart is empty</Text>
          </View>
        )}
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold"
  },
  cartItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9"
  },
  itemName: {
    fontSize: 18,
    fontWeight: "500"
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 4
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888"
  }
});

export default CartScreen;
