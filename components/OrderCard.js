import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const OrderCard = ({ item, addToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subheading}>{item.subheading}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  info: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 16,
    color: "#fdb44b",
  },
});

export default OrderCard;
