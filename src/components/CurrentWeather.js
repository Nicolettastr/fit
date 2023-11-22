import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Feather name="sun" size={48} color="black" />
      <View style={styles.textWrap}>
        <Text>Hola</Text>
        <Text>Current weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.halWrap}>
          <Text style={styles.hal}>High: 8</Text>
          <Text style={styles.hal}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.text}>
        <Text style={styles.one}>Its Sonny</Text>
        <Text style={styles.two}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  },
  textWrap: {
    flex: 1,
    alignItems: 'center'
  },
  temp: {
    color: 'black',
    fontSize: '48'
  },
  feels: {
    color: 'blue',
    fontSize: 30
  },
  hal: {
    color: 'orange',
    fontSize: 20
  },
  halWrap: {
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  one: {
    fontSize: 38
  },
  two: {
    fontSize: 25
  }
})

export default CurrentWeather;