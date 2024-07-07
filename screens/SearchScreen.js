import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import NavBar from "../components/NavBar";
import styles from "../styles/Search";

const SearchScreen = () => {
  const handleSearch = () => {
    // Handle search functionality here
    // This function will be called when the search button is pressed
    console.log("Performing search...");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.heading}>Search</Text>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Enter your search"
            placeholderTextColor="#aaa"
            // onChangeText={(text) => handleTextChange(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <NavBar />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchScreen;
