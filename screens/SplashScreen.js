
import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/splash";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/foodbash-bg.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.mainHeading}>
          Food<Text style={{ color: "#FF7300" }}>Bash</Text>
        </Text>
        <Text style={styles.subHeading}>
          Bash your hunger, not your budget! Discover a world of flavors at
          unbeatable prices.
        </Text>
        <ActivityIndicator size="large" color="#000" style={styles.loader} />
        <Text style={styles.footerText}>Designed By{"\n"}Sunscar</Text>
      </View>
    </SafeAreaView>
  );
}
