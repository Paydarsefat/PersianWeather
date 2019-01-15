import React, { Component } from "react";
import { Text, View, StyleSheet, Button} from "react-native";


export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    // this.state = {};
  }
  render() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Go to Details" onPress={() => this.props.navigation.navigate("Detial")} />
        <Text>Homescreen</Text>
      </View>;
  }
}
