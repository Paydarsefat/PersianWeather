import React, { Component } from "react";
import {
  WebView,
  Text,
  View,
  StyleSheet,
  Button,
  DeviceEventEmitter
} from "react-native";
// import { SensorManager } from "NativeModules";
import { accelerometer } from "react-native-sensors";
// import { WebView } from "react-native-gesture-handler";


var mSensorManager = require("NativeModules").SensorManager;

export default class Detialscreen extends Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    mSensorManager.startThermometer(200);
    this.state = {};
    DeviceEventEmitter.addListener("Thermometer", function(data) {
        /**
         * data.temp
         **/
        this.setState({ titleText: data.temp });
      }.bind(this));
  }
  componentDidMount() {
    //  mSensorManager.startOrientation(5000); // Minimum delay does not work :(
    //  DeviceEventEmitter.addListener("Orientation", orientation => {
    //   mSensorManager.stopOrientation();
    //   alert(JSON.stringify(orientation));
    //   this.setState({ titleText: "ttt" });
    // });
    // const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
    //   this.setState({
    //     t:x
        
    //   })
    // );
  }

  //SensorManager.stopThermometer();
  render() {
    // return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //     <Text>DetialScreen</Text>
    //     <Button title="Go to Details... again" onPress={() => this.props.navigation.push("Details")} />
    //     <Text>HomeScreen</Text>
    //   <Text>{this.state.titleText}</Text>
    //     <Button title="Go to Home" onPress={() => this.props.navigation.navigate("Home")} />
    //   </View>;
    return (
      <WebView
        source={{ uri: 'https://github.com/facebook/react-native' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
