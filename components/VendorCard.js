import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/CardVendor";

const VendorCard = ({ id, profilePicture, title, rating }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("Orders", { vendorId: id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Image source={profilePicture} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </TouchableOpacity>
  );
};

export default VendorCard;
