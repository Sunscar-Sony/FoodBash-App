import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/CardOrder";

const OrderCard = ({ item, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (addedToCart) {
      // Remove from cart functionality
      setAddedToCart(false);
    } else {
      // Add to cart functionality
      addToCart(item);
      setAddedToCart(true);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subheading}>{item.subheading}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.addToCartButton,
          addedToCart ? styles.addedToCartButton : null,
        ]}
        onPress={handleAddToCart}
      >
        {addedToCart ? (
          <Ionicons name="checkmark" size={24} color="#000" />
        ) : (
          <Ionicons name="cart-outline" size={24} color="#000"/>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default OrderCard;
