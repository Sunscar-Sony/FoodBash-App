import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/Card';
import vendorData from '../data/Vendor.json';

const VendorCard = ({ profilePicture, title, rating }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profilePicture }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </View>
  );
};

export default VendorCard;
