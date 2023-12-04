/* eslint-disable no-undef */
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity
} from "react-native"
import { theme } from "../theme/index"
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false)

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
            style={StyleSheet.compose(styles.searchBar, {
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent"
            })}
          >
            {showSearch ? (
              <TextInput
                placeholder="Search city"
                placeholderTextColor={"lightgray"}
                style={styles.searchBarInput}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={StyleSheet.compose(styles.searchBarIcon, {
                backgroundColor: theme.bgWhite(0.3)
              })}
            >
              <MagnifyingGlassIcon size={25} color={"white"} />
            </TouchableOpacity>
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
    height: 50,
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
    borderRadius: 100
  },
  searchBarInput: {
    width: "90%",
    padding: 16
  },
  searchBarIcon: {
    borderRadius: 100,
    padding: 5,
    marginRight: 15
  }
})

export default HomeScreen
