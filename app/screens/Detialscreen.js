import React, { Component } from "react";
import { Text, View, StyleSheet , Button } from "react-native";

export default class Detialscreen extends Component {
    constructor(props) {
        super(props);
        var navigation = this.props.navigation;
        // this.state = {};
    }
    render() {
        return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>DetialScreen</Text>
            <Button title="Go to Details... again" onPress={() => this.props.navigation.push("Details")} />
            <Text>HomeScreen</Text>
            <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
          </View>;
    }
}
