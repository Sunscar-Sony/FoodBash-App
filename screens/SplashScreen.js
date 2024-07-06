import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  return (
    <SafeAreaView style={{flex:1, color:'#000'}}>
      <View>
        <Text>SplashScreen</Text>
      </View>
    </SafeAreaView>
  );
}
