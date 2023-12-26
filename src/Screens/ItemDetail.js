import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const ItemDetail = ({ productoSeleccionado, setProductoSeleccionado }) => {



  return (
    <>
      <Header title='DETALLE PRODUCTO'
        setProductoSeleccionado={setProductoSeleccionado}
      />
      <Text>{productoSeleccionado.title}</Text>
      <Text style={styles.segundoTexto}>{productoSeleccionado.description}</Text>
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