import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import dataProductos from "../Data/products.json"
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'


const ItemListCategories = ({ navigation, route }) => {
  const { Categoria } = route.params
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState([])
  useEffect(() => {
    if (Categoria) {
      const categoriasFiltradas = dataProductos.filter(elemento => elemento.category === Categoria)
      const productosFiltrados = categoriasFiltradas.filter(elemento => elemento.title.toLowerCase().includes(keyword.toLowerCase()))
      setProducts(productosFiltrados)
    } else {
      const productosFiltrados = dataProductos.filter(elemento => elemento.title.toLowerCase().includes(keyword.toLowerCase()))
      setProducts(productosFiltrados)
    }

  }, [keyword])

  return (
    <>
      <Search setKeyword={setKeyword} />
      <FlatList style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductItem producto={item} navigation={navigation} />
        )}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    width: "80%"
  }
})