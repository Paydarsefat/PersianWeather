import React, { Component } from "react";
import {
  Dimensions,
  TextInput,
  Text,
  View,
  StyleSheet,
  Alert,
  StatusBar,
  TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Searchscreen extends Component {
  constructor(props) {
    super(props);
    var navigation = this.props.navigation;
    this.state = {
      newAlert: 0,
      searchInput: '',
      searchResult: 0,
      error: "Search for a city .....",
      item: {},
      textInputp: "شهر مورد نظر خود را جستجو کنید "
    };

    // this.fetchCityTemp("mashhad", "IR");
    // var list = this.getRandom(this.state.cities, 5);
  }
  searchCity = () => {
    this.fetchCityTemp(this.state.searchInput);
  };
  fetchCityTemp = city => {
    this.setState({
      item: {},
      searchResult: 0,
      error: "Search for a city..."
    });
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=5e35e77dd812ab43a4214216d2ff9383&units=metric"
    )
      .then(response => response.json())
      .then(responseJson => {
        var r = responseJson.main;
        var obj = responseJson;
        if (responseJson.cod !== 200) {
          this.setState({
            searchResult: 0,
            error: "City not Found!"
          });
        } else {
          var city = {
            name: obj.name,
            temp: Math.ceil(r.temp),
            type: obj.weather[0].main,
            desc: "Humidity:" + r.humidity + "% -" + obj.weather[0].main
          };
          this.setState({
            item: city,
            searchResult: 1
          });
        }
        // Alert.alert("your OK! when Mount class");
      });
  };

  showAlert = () => {
    Alert.alert("your OK ! After press Button");
  };
  // async componentDidMount() {
  //   this.fatchTemps();
  // }

  getTempRange = t => {
    if (t < 11) {
      return 1;
    }
    if (t > 10 && t < 20) {
      return 2;
    }
    if (t > 20 && t < 30) {
      return 3;
    }
    if (t >= 30) {
      return 4;
    }
  };

  getEmoji = type => {
    if (type == "Clouds") {
      return "☁️";
    }
    if (type == "Clear") {
      return "☼";
    }
    if (type == "Haze") {
      return "⛅";
    }
    if (type == "Thunderstorm") {
      return "🌩";
    }
    if (type == "Rain") {
      return "🌧";
    }
    if (type == "Snow") {
      return "❄";
    }
    if (type == "Mist") {
      return "🌁";
    }
    if (type == "Fog") {
      return "🌁";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>آب و هوای شهرها </Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Text
            style={{
              textAlign: "center",
              lineHeight: 20,
              padding: 5,
              fontSize: 16
            }}
          >
            شهر مورد نظر خود را جستجو کنید
          </Text>
          <TextInput
            placeholder={this.state.textInputp}
            placeholderTextColor="white"
            onKeyPress={() => this.searchCity()}
            onChangeText={text =>
              this.setState({
                searchInput: text
              })
            }
            value={this.state.searchInput}
            style={{
              width: "100%",
              padding: 14,
              borderRadius: 8,
              margin: 5,
              backgroundColor: "#778ca3",
              color: "white",
              textAlign: "right"
            }}
          />
          {/* <TouchableHighlight
            style={{ backgroundColor: "grey", padding: 16, borderRadius: 8 }}
            onPress={() => this.searchCity()}
          >
             <Text style={{ fontSize: 12, color: "white" }}>search</Text> 
          </TouchableHighlight> */}
        </View>

        {this.state.searchResult == 1 ? (
          <View
            style={{
              marginTop: 2,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <TouchableHighlight
              underlayColor="white"
              onPress={() =>
                this.setState({
                  newAlert: 1,
                  alertMsg: this.state.item.desc
                })
              }
            >
              <LinearGradient
                colors={["#00FFFF", "#C0C0C0"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
              >
                <View style={styles.row}>
                  <Text
                    style={[
                      this.getTempRange(this.state.item.temp) == 1
                        ? styles.cold
                        : styles.temp,
                      this.getTempRange(this.state.item.temp) == 2
                        ? styles.medium
                        : styles.temp,
                      this.getTempRange(this.state.item.temp) == 3
                        ? styles.hot
                        : styles.temp,
                      this.getTempRange(this.state.item.temp) == 4
                        ? styles.vhot
                        : styles.temp,
                      ,
                      styles.temp
                    ]}
                  >
                    {this.getEmoji(this.state.item.type)}{" "}
                    {this.state.item.temp}
                    °C
                  </Text>
                  <Text style={styles.cityN}>{this.state.item.name}</Text>
                </View>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>{this.state.error}</Text>
          </View>
        )}
        {this.state.newAlert == 1 ? (
          <View
            style={{
              padding: 5,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%"
            }}
          >
            <View style={{ width: "65%", height: 90 }}>
              <LinearGradient
                style={{
                  padding: 5,
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  justifyContent: "space-between",
                  flex: 1,
                  borderRadius: 20
                }}
                colors={["#FFFFFF", "blue"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    padding: 10,
                    textAlign: "center"
                  }}
                >
                  {this.state.alertMsg}
                </Text>
                <TouchableHighlight
                  underlayColor="white"
                  onPress={() =>
                    this.setState({ alertMsg: "", newAlert: 0 })
                  }
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      padding: 10,
                      textAlign: "center"
                    }}
                  >
                    Close
                  </Text>
                </TouchableHighlight>
              </LinearGradient>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cold: { color: "blue" },
  hot: { color: "#FF8C00" },
  medium: { color: "green" },
  vhot: { color: "red" },
  temp: {
    fontSize: 30,
    lineHeight: 40,
    width: 130,
    marginRight: 15,
    fontWeight: "bold",
    fontFamily: "Avenir"
  },
  cityN: {
    fontSize: 20,
    lineHeight: 40,
    fontFamily: "Avenir"
  },
  row: {
    flex: 1,
    width: Dimensions.get("window").width,
    paddingVertical: 25,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  title: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
