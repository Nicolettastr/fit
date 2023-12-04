import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { LogBox } from "react-native"
import Detail from "../screens/Detail"

const stack = createNativeStackNavigator()

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state"
])

const MyStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <stack.Screen
        name="detail"
        options={{ headerShown: false }}
        component={Detail}
      />
    </stack.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default AppNavigation
