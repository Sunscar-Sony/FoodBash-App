import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Animated,
  SafeAreaView,
  Modal,
  Image,
  ImageBackground,
} from "react-native";
import VendorCard from "../components/VendorCard";
import vendorData from "../data/Vendor.json";
import styles from "../styles/Home";
import NavBar from "../components/NavBar";

const HomeScreen = ({ navigation }) => {
  const [zoomAnim] = useState(new Animated.Value(1));
  const [modalVisible, setModalVisible] = useState(false);

  const handleProfileClick = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
          <TextInput style={styles.searchBar} placeholder="Search..." />
          <TouchableOpacity onPress={handleProfileClick}>
            <Animated.Image
              source={require("../assets/images/user.png")}
              style={[styles.profile, { transform: [{ scale: zoomAnim }] }]}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainHeading}>
          Campus <Text style={{ color: "#fdb44b" }}>Cravings</Text>
        </Text>
        <FlatList
          data={vendorData}
          renderItem={({ item }) => <VendorCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.vendorList}
        />
        <NavBar />

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleModalClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={handleModalClose}
                style={styles.modalClose}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
              <Image
                source={require("../assets/images/user.png")}
                style={styles.modalImage}
              />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
