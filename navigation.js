import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer screenOptions={{ headerShown: false }}>
        <Stack.Navigator>
          <Stack.Screen component={SplashScreen} />
          <Stack.Screen component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;