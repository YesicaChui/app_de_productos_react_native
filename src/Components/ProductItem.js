import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const ProductItem = ({producto}) => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.imagen}
      source={{uri:producto.thumbnail}}
      resizeMode='cover'
      
      />
      <Text style={styles.text}>{producto.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:colors.color3,
    margin:5,
    padding:10,
    alignItems:'center'
  },
  imagen:{
    width:90,
    height:90,
    borderRadius:10
  }
})