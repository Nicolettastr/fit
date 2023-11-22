import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from "./src/components/CurrentWeather";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import Details from './src/components/Details';
import UpcomingWeather from './src/components/UpcomingWeather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <View style={styles.container} >
      <UpcomingWeather/>
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;