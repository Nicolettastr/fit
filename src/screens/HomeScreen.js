/* eslint-disable no-undef */
import { StatusBar } from "expo-status-bar"
import React from "react"
import { Image, SafeAreaView, StyleSheet, View, TextInput } from "react-native"
import { theme } from "../theme/index"

const HomeScreen = () => {


  const apiKey = '0459915eec487c3db8d815324e29b59bc581c8d6'
const apiUrl = "https://wger.de/api/v2/exercise/"

fetch(apiUrl, {
  method: 'GET',
  headers: {
    Authorization: `Token ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    // Manejar los datos recibidos de la API
    console.log(data)
  })
  .catch(error => {
    // Manejar errores
    console.error('Error fetching data:', error)
  })


  return (
    <View style={styles.HomeContainer}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/abstract.jpg")}
        style={styles.homeImage}
      />
      <SafeAreaView style={styles.searchBarWrapper}>
        <View style={styles.searchBarContainer}>
          <View
            style={[styles.searchBar, { backgroundColor: theme.bgWhite(0.2) }]}
          >
            <TextInput
              placeholder="Search city"
              placeholderTextColor={"lightgray"}
              style={styles.searchBarInput}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  searchBarWrapper: {
    flex: 1
  },
  homeImage: {
    flex: 1,
    position: "absolute"
  },
  searchBarContainer: {
    height: 40,
    position: "relative",
    marginLeft: 20,
    marginRight: 20,
    zIndex: 50
  },
  searchBar: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    borderRadius: 15
  },
  searchBarInput: {
    width: "100%",
    padding: 16
  }
})

export default HomeScreen
