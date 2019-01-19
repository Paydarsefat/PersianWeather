import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  StatusBar,
  FlatList,
  TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Homescreen extends Component {
  constructor(props) {
    super(props);
    // var navigation = this.props.navigation;
    this.state = {
      cities: [
        {
          name: "London",
          country: "UK"
        },
        {
          name: "Edinburgh",
          country: "UK"
        },
        {
          name: "New York",
          country: "US"
        },
        {
          name: "Texas",
          country: "US"
        },
        {
          name: "Washington",
          country: "US"
        },
        {
          name: "Paris",
          country: "France"
        },
        {
          name: "Doha",
          country: "Qatar"
        },
        {
          name: "Sydney",
          country: "Australia"
        },
        {
          name: "Cancun",
          country: "Mexico"
        },
        {
          name: "Madrid",
          country: "Spain"
        },
        {
          name: "Berlin",
          country: "Germany"
        },
        {
          name: "Brussels",
          country: "Belgium"
        },
        {
          name: "Copenhagen",
          country: "Denmark"
        },
        {
          name: "Athens",
          country: "Greece"
        },
        {
          name: "New Delhi",
          country: "India"
        },
        {
          name: "Dublin",
          country: "Ireland"
        },
        {
          name: "Rome",
          country: "Italy"
        },
        {
          name: "Tokyo",
          country: "Japan"
        },
        {
          name: "Wellington",
          country: "New Zealand"
        },
        {
          name: "Amsterdam",
          country: "Netherlands"
        },
        {
          name: "Oslo",
          country: "Norway"
        },
        {
          name: "Panama City",
          country: "Panama"
        },
        {
          name: "Lisbon",
          country: "Portugal"
        },
        {
          name: "Warsaw",
          country: "Poland"
        },
        {
          name: "Moscow",
          country: "Russia"
        }
      ],
      list: [],
      refresh: true
    };

    // this.fetchCityTemp("mashhad", "IR");
    // var list = this.getRandom(this.state.cities, 5);
  }

  fatchTemps = () => {
    var newList = [];
    this.state.list = [];
    var list = this.getRandom(this.state.cities, 7);
    for (city in list) {
      var name = list[city].name;
      var country = list[city].country;
      this.fetchCityTemp(name, country, newList);
    }
  };

  getRandom = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    // console.log(n);
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };
  loadNewTemps = () => {
    this.setState({
      list: [],
      refresh: true
    });
    this.fetchTemps();
  };
  fetchCityTemp = (city, country, newList) => {
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
          type: obj.weather[0].main,
          desc: "Humidity:" + r.humidity + "% -" + obj.weather[0].main
        };
        newList.push(city);

        this.setState({
          list: newList,
          resfresh: false
        });

        // Alert.alert("your OK! when Mount class");
      });
  };

  showAlert = () => {
    Alert.alert("your OK ! After press Button");
  };
  async componentDidMount() {
    this.fatchTemps();
  }

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
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Detial")}
        /> */}
        {/* <Button title="Alert Button" onPress={this.showAlert} /> */}
        <Text style={styles.title}>CityWeather </Text>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.list}
          refreshing={this.state.refresh}
          keyExtractor={(item, index) => index.toString()} // onRefresh={this.loadNewTemps}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              underlayColor="white"
              onPress={() => alert(item.desc)}
            >
              <LinearGradient
                colors={[
                  "#00FFFF",
                  "#17C8FF",
                  "#329BFF",
                  "#4C64FF",
                  "#6536FF",
                  "#8000FF"
                ]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
              >
               
                <View style={styles.row}>
                  <Text
                    style={[
                      this.getTempRange(item.temp) == 1
                        ? styles.cold
                        : styles.temp,
                      this.getTempRange(item.temp) == 2
                        ? styles.medium
                        : styles.temp,
                      this.getTempRange(item.temp) == 3
                        ? styles.hot
                        : styles.temp,
                      this.getTempRange(item.temp) == 4
                        ? styles.vhot
                        : styles.temp,
                      ,
                      styles.temp
                    ]}
                  >
                    {item.temp}C
                  </Text>
                  <Text style={styles.cityN}>{item.name}</Text>
                </View>
              </LinearGradient>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cold: { color: "blue" },
  hot: { color: "orange" },
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
    paddingVertical: 40,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "white"
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
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
