import React from 'react'
import { View,  Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation()

    const goTo = () => {
        navigation.navigate('Details')
    }

  return (
    <View>
        <Text>
            Home
        </Text>
        <Button title='Go to Details' onPress={goTo} />
    </View>
  )
}

export default HomeScreen
