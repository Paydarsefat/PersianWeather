import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './app/screens/Homescreen.js';
import Detialscreen from './app/screens/Detialscreen';

const App = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Detial: { screen: Detialscreen }
  },
  {
    initialRouteName: "Home",
    headerMode :'none',
    
  }
);

export default createAppContainer(App);
