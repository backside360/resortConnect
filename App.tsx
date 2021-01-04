import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/pages/HomeScreen';
import { Routes } from './src/pages';

const Stack = createStackNavigator();

function App() {
  return <Routes />;
}

export default App;
