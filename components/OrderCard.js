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

export default OrderCard;
