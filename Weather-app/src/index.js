// Weather.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import WeatherScreen from "./WeatherScreen";
import Search from "./Search";

// -------------------API KEY-----------------------
const API_KEY = "eee3032eb92d5531511faf21cea0d3eb";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const [loaded, setLoaded] = useState(false);

  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
        Alert.alert("City Not Found 🤔", "Please enter a valid city name.");
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error Occurred", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>

      {/* Include the Search component */}

      <Search fetchWeatherData={fetchWeatherData} />

      {/* Display weather data or loading indicator */}

      {loaded ? (
        weatherData === null ? (
          <View style={styles.errorContainer}>
            <Text>City Not Found 🤔</Text>
          </View>
        ) : (
          <WeatherScreen
            weatherData={weatherData}
            fetchWeatherData={fetchWeatherData}
          />
        )
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 90,
    overflow: "hidden",
    height: 60,
    justifyContent: "center",
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "white" },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Weather;
