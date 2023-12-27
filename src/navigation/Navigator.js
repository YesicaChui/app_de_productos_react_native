import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <ShopStack/> */}
      {/* <CartStack/> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarStyle:styles.bottomBar,
        }}
      >
        <Tab.Screen
        name="ShopStack" 
        component={ShopStack} 
        options={{
          tabBarIcon:()=><Entypo name="shop" size={24} color="white" />
        }}
        />
        <Tab.Screen name="CartStack"
         component={CartStack} 
         options={{
          tabBarIcon:()=><Entypo name="shopping-cart" size={24} color="white"/>
        }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  bottomBar:{
    backgroundColor:"pink",
    elevation:4,
    shadowColor:"black",
    position: 'absolute',
    bottom:25,
    left:20,
    right:20,
    borderRadius: 8,
    height: 90
  } 
})