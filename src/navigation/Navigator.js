import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'



const Navigator = () => {
  return (
    <NavigationContainer>
    <ShopStack/>
  </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})