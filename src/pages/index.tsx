import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { Transport } from './Transport';
import { Houses } from './Housing';
import { Transfer } from './Transport/modules/Transfer';

const Stack = createStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Transport" component={Transport} />
      <Stack.Screen name="Housing" component={Houses} />
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  </NavigationContainer>
);
