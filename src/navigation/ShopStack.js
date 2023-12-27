import { StyleSheet, Text, View } from 'react-native'
import Home from '../Screens/Home';
import ItemListCategories from '../Screens/ItemListCategories';
import ItemDetail from '../Screens/ItemDetail';
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={
      ({route})=>{
        return {
          header: ()=> <Header title={
            route.name === "Home"? "Categorias":
            route.name === "Productos"? "Categoria "+route.params.Categoria:
            "Detalle de Producto"
          }/>
        }
      }
    }
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Productos" component={ItemListCategories} />
      <Stack.Screen name="Detalle" component={ItemDetail} />
    </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})