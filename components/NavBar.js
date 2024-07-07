import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Home';

const NavBar = ({ selectedNavItem, handleNavPress }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => handleNavPress('Home')}>
        <Icon name="home-outline" size={24} color={selectedNavItem === 'Home' ? 'yellow' : '#000'} style={styles.navIcon} />
        <Text style={[styles.navItem, { color: selectedNavItem === 'Home' ? 'yellow' : '#000' }]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('Search')}>
        <Icon name="search-outline" size={24} color={selectedNavItem === 'Search' ? 'yellow' : '#000'} style={styles.navIcon} />
        <Text style={[styles.navItem, { color: selectedNavItem === 'Search' ? 'yellow' : '#000' }]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('Cart')}>
        <Icon name="cart-outline" size={24} color={selectedNavItem === 'Cart' ? 'yellow' : '#000'} style={styles.navIcon} />
        <Text style={[styles.navItem, { color: selectedNavItem === 'Cart' ? 'yellow' : '#000' }]}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavPress('Profile')}>
        <Icon name="person-outline" size={24} color={selectedNavItem === 'Profile' ? 'yellow' : '#000'} style={styles.navIcon} />
        <Text style={[styles.navItem, { color: selectedNavItem === 'Profile' ? 'yellow' : '#000' }]}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
