/* eslint-disable no-undef */
import { StatusBar } from "expo-status-bar"
import React from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  TextInput
} from "react-native"

const HomeScreen = () => {
  const userForm = ["Username", "Email", "Password"]

  const createUserForm = userForm.map((item) => {
    return (
      <TextInput
        key={item}
        placeholder={item}
        onChange={(value) => console.log(value)}
      />
    )
  })

  return (
    <ScrollView style={styles.HomeContainer}>
      <StatusBar style="light" />
      <Image
        blurRadius={30}
        source={require("../../assets/purple.jpg")}
        style={styles.homeImage}
      />
      <SafeAreaView style={styles.searchBarWrapper}>
        <View>{createUserForm}</View>
        <TextInput placeholder="hola" />
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1
  },
  searchBarWrapper: {
    flex: 1
  },
  homeImage: {
    flex: 1,
    position: "absolute"
  }
})

export default HomeScreen
