import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Animated, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Login";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const heroImageHeight = useRef(new Animated.Value(300)).current;
  const formContainerTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
      Animated.timing(heroImageHeight, {
        toValue: 120,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(formContainerTranslateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      Animated.timing(heroImageHeight, {
        toValue: 300,
        duration: 300,
        useNativeDriver: false,
      }).start();

      Animated.timing(formContainerTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [heroImageHeight, formContainerTranslateY]);

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
      />
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
        <Animated.Image
          source={require("../assets/images/login-hero.png")}
          style={[styles.heroImage, { height: heroImageHeight }]}
        />
        <Animated.View style={[styles.formContainer, { transform: [{ translateY: formContainerTranslateY }] }]}>
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
        </Animated.View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
