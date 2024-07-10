import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import NavBar from "../components/NavBar";
import OrderCard from "../components/OrderCard";
import styles from "../styles/Search";
import VendorData from "../data/VendorData.json"; 

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = [];
    for (const vendor in VendorData) {
      const items = VendorData[vendor].filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      results.push(...items);
    }
    setSearchResults(results);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.heading}>Search</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your search"
            placeholderTextColor="#aaa"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderCard item={item} />}
          style={styles.resultsList}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <NavBar />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchScreen;
