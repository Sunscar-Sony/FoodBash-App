import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import NavBar from "../components/NavBar";
import styles from "../styles/Profile";

const user = {
  name: "Sanskar Soni",
  email: "sunscar@psit.ac.in",
  branch: "CSE",
  rollno: "2301640100348",
  profileImage: require("../assets/images/user.png"),
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.profileContainer}>
            <Image source={user.profileImage} style={styles.profileImage} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.name}>{user.branch}</Text>
            <Text style={styles.name}>{user.rollno}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
          {/* Add more profile details and settings here */}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Order History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <NavBar />
      </ImageBackground>
    </SafeAreaView>
  );
}
