import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import { LogBox } from "react-native"

const stack = createNativeStackNavigator()

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state'
])

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
        </stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation