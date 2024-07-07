import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: 100,
          }}
        >
          Cart Screen
        </Text>
      </View>
      <NavBar />
    </SafeAreaView>
  );
}
