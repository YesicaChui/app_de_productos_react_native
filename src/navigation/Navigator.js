import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ItemListCategories from '../Screens/ItemListCategories';
import ItemDetail from '../Screens/ItemDetail';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Productos" component={ItemListCategories} />
      <Stack.Screen name="Detalle" component={ItemDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})