import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
// import Search from "./Search";

const WeatherScreen = ({ weatherData, fetchWeatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      {/* <Search fetchWeatherData={fetchWeatherData} /> */}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
          style={styles.largeIcon}
        ></Image>
        <Text style={styles.currentTemp}>{temp} °C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      {/* FIRST ROW OF ICONS - TEMP & HUMIDITY */}
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          {/* 1 */}
          <Image
            style={styles.imageIcon}
            source={require("../assets/temperature.png")}
          />
          <Text style={styles.infoText}>{feels_like} °C</Text>
        </View>
        {/* 2 */}
        <View style={styles.info}>
          <Image
            style={styles.imageIcon}
            source={require("../assets/humidity.png")}
          />
          <Text style={styles.infoText}>{humidity}%</Text>
          <Text style={styles.infoText}>Humidity</Text>
        </View>
      </View>
      {/* SECOND ROW OF DATA */}
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          {/* 1 */}
          <Image
            style={styles.imageIcon}
            source={require("../assets/eye.png")}
          />
          <Text style={styles.infoText}>{visibility} </Text>
          <Text style={styles.infoText}>Visibility</Text>
        </View>
        {/* 2 */}
        <View style={styles.info}>
          <Image
            style={styles.imageIcon}
            source={require("../assets/wind.png")}
          />
          <Text style={styles.infoText}>{speed} m/s</Text>
          <Text style={styles.infoText}>Wind Speed</Text>
        </View>
      </View>
      {/* THIRD ROW - SUNSET & SUNRISE */}
      <View style={styles.extraInfo}>
        <View style={styles.info}>
          {/* 1 */}
          <Image
            style={styles.imageIcon}
            source={require("../assets/sunrise.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunrise * 1000).toLocaleTimeString()}
          </Text>
          <Text style={styles.infoText}>Sunrise</Text>
        </View>
        {/* 2 */}
        <View style={styles.info}>
          <Image
            style={styles.imageIcon}
            source={require("../assets/sunset.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunset * 1000).toLocaleTimeString()}
          </Text>
          <Text style={styles.infoText}> Sunset</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 15 },
  header: {},
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "tomato",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  largeIcon: { width: 150, height: 150 },
  currentTemp: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    right: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  info: {
    width: Dimensions.get("screen").width / 2.2,
    backgroundColor: "#d0eafa",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  imageIcon: { height: 40, width: 40, borderRadius: 40 / 2, marginLeft: 50 },
  infoText: { textAlign: "center", fontSize: 18 },
});

export default WeatherScreen;
