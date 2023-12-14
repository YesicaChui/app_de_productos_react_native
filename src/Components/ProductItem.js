import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const ProductItem = ({producto}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{producto.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.color3,
    margin:5,
    padding:10,
    alignItems:'center'
  }
})