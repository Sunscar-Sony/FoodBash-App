import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, Animated, SafeAreaView } from 'react-native';
import VendorCard from '../components/VendorCard';
import vendorData from '../data/Vendor.json';
import styles from '../styles/Home';

const HomeScreen = () => {
  const [zoomAnim] = useState(new Animated.Value(1));

  const handleProfileClick = () => {
    Animated.spring(zoomAnim, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(zoomAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <TouchableOpacity onPress={handleProfileClick}>
          <Animated.Image
            source={require('../assets/splash.png')}
            style={[styles.profile, { transform: [{ scale: zoomAnim }] }]}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.mainHeading}>Vendors</Text>
      <FlatList
        data={vendorData}
        renderItem={({ item }) => <VendorCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.vendorList}
      />
      <View style={styles.navBar}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Search</Text>
        <Text style={styles.navItem}>Orders</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
