import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'
 

const Header = ({title = "producto"}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>{title}</Text>      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.color1,
    width:"100%",
    height:80,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    fontSize:20
  }
})