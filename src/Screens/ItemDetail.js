import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const ItemDetail = ({ route }) => {
const {producto} = route.params


  return (
    <>
      <Text>{producto.title}</Text>
      <Text style={styles.segundoTexto}>{producto.description}</Text>
    </>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flex: 1,
    alignItems: "center"
  },
  segundoTexto:{
    backgroundColor:"red",
    display:Platform.OS==='android'?'none':'flex'
  }
})