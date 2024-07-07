import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/Card'; // Assuming you have styles defined separately

const VendorCard = ({ profilePicture, title, rating }) => {

  return (
    <View style={styles.card}>
      <Image source={profilePicture} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </View>
  );
};

export default VendorCard;
