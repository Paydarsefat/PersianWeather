import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer} from "react-navigation";
import HomeScreen from './app/screens/Homescreen.js';
import Detialscreen from './app/screens/Detialscreen';
import Searchscreen from "./app/screens/Searchscreen.js";

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Detial: { screen: Detialscreen },
    جستجو : {screen:Searchscreen}
  },
  {
    initialRouteName: "Home",
    headerMode :'none',
    
  }
);

export default createAppContainer(App);
