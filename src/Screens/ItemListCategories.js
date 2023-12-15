import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import dataProductos from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'


const ItemListCategories = () => {
  const [keyword, setKeyword] = useState("")
  const [products, setProducts]= useState([])
  useEffect(() => {
   const productosFiltrados = dataProductos.filter(elemento=>elemento.title.toLowerCase().includes(keyword.toLowerCase()))
   setProducts(productosFiltrados)
  }, [keyword])

  return (
    <>
      <Header title='PRODUCTO' />
      <Search setKeyword={setKeyword} />
      <FlatList style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductItem producto={item} />
        )}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width: "80%"
  }
})