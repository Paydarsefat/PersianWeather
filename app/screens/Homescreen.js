import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    // this.state = {};
    this.fetchCityTemp("mashhad", "IR");
  }

  fetchCityTemp = (city, country) => {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "," +
        country +
        "&appid=5e35e77dd812ab43a4214216d2ff9383&units=metric"
    )
      .then(response => response.json())
      .then(responseJson => {
        var r = responseJson.main;
        var obj = responseJson;
        var city = {
          name: obj.name,
          country: country,
          temp: Math.ceil(r.temp),
          type: obj.weather[0].main
        };

        Alert.alert("your OK! when Mount class");
      });
  };

  showAlert = () => {
    Alert.alert("your OK ! After press Button");
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Detial")}
        />
        <Button title="Alert Button" onPress={this.showAlert} />
        <Text>Homescreen </Text>
      </View>
    );
  }
}
