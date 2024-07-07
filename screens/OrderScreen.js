import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import VendorData from "../data/VendorData.json";
import styles from "../styles/Orders";

const OrderScreen = ({ route }) => {
  const { vendorId } = route.params;

  const orders = VendorData[vendorId];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Today's <Text style={{ color: "#fdb44b" }}>Menu</Text>
      </Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrderScreen;
