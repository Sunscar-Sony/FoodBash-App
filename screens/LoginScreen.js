import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Login";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
    <Image source={require('../assets/images/foodbash-bg.png')} style={styles.backgroundImage} />
      <Image source={require("../assets/images/login-hero.png")} style={styles.heroImage} />
      <View style={styles.formContainer}>
        <Text style={styles.heading}>{isLogin ? "Login" : "Sign Up"}</Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />
        {!isLogin && (
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="#999"
          />
        )}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>{isLogin ? "Login" : "Sign Up"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin
              ? "Don't have an Account? Sign Up"
              : "Already have an Account? Login"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
