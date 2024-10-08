import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart";

const CartScreen = ({ route }) => {
  const cart = route?.params?.cart || [];
  const totalValue = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrderNow = () => {
    // Handle order logic here
    alert("Order Now functionality will be implemented.");
  };

  return (
    <ImageBackground
      source={require("../assets/images/foodbash-bg.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={styles.headerText}>Cart Screen</Text>
          {cart.length > 0 ? (
            <>
              <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.cartItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                )}
              />
              <View style={styles.orderNowContainer}>
                <Text style={styles.totalValueText}>
                  Total: ${totalValue.toFixed(2)}
                </Text>
                <TouchableOpacity
                  style={styles.orderNowButton}
                  onPress={handleOrderNow}
                >
                  <Text style={styles.orderNowText}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.emptyCart}>
              <Text style={styles.emptyCartText}>Your cart is empty</Text>
            </View>
          )}
        </View>
        <NavBar />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CartScreen;
