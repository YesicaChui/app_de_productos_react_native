import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import dataProductos from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useState } from 'react'


const ItemListCategories = () => {
  const [textSearch, setTextSearch] = useState("")

  return (
    <>
      <Header title='PRODUCTO' />
      <Search textSearch={textSearch} setTextSearch={setTextSearch} />
      <FlatList 
      data={dataProductos}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <ProductItem producto={item}/>
      )}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({

})