import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../styles/Nav";

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedNavItem = route.name;

  const handleNavPress = (navItem) => {
    navigation.navigate(navItem);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => handleNavPress("Home")}>
        <Icon
          name="home-outline"
          size={24}
          color={selectedNavItem === "Home" ? "#fdb44b" : "#000"}
          style={styles.navIcon}
        />
        <Text
          style={[
            styles.navItem,
            { color: selectedNavItem === "Home" ? "#fdb44b" : "#000" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress("Search")}>
        <Icon
          name="search-outline"
          size={24}
          color={selectedNavItem === "Search" ? "#fdb44b" : "#000"}
          style={styles.navIcon}
        />
        <Text
          style={[
            styles.navItem,
            { color: selectedNavItem === "Search" ? "#fdb44b" : "#000" },
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress("Cart")}>
        <Icon
          name="cart-outline"
          size={24}
          color={selectedNavItem === "Cart" ? "#fdb44b" : "#000"}
          style={styles.navIcon}
        />
        <Text
          style={[
            styles.navItem,
            { color: selectedNavItem === "Cart" ? "#fdb44b" : "#000" },
          ]}
        >
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress("Profile")}>
        <Icon
          name="person-outline"
          size={24}
          color={selectedNavItem === "Profile" ? "#fdb44b" : "#000"}
          style={styles.navIcon}
        />
        <Text
          style={[
            styles.navItem,
            { color: selectedNavItem === "Profile" ? "#fdb44b" : "#000" },
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
