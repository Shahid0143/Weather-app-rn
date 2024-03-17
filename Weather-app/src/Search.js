
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        style={styles.input}
      />
      <EvilIcons
        name="search"
        size={30}
        color="black"
        onPress={() => {
          fetchWeatherData(cityName);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop:30,
    width: "80%",
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    marginHorizontal: 35,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
});

export default Search;
