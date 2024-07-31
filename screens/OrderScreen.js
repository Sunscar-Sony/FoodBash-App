import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import VendorData from "../data/VendorData.json";
import OrderCard from "../components/OrderCard";
import styles from "../styles/Orders";

const OrderScreen = ({ route, navigation }) => {
  const { vendorId } = route.params;
  const orders = VendorData[vendorId];
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const goToCart = () => {
    navigation.navigate("Cart", { cart });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Today's <Text style={{ color: "#fdb44b" }}>Menu</Text>
      </Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OrderCard item={item} addToCart={addToCart} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.goToCartButton} onPress={goToCart}>
        <Text style={styles.goToCartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderScreen;
