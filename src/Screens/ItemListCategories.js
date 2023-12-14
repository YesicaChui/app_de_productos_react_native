import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Header from '../Components/Header'
import Search from '../Components/Search'
import dataProductos from "../Data/products.json"


const ItemListCategories = () => {
  return (
    <>
      <Header title='PRODUCTO' />
      <Search />
      <FlatList 
      data={dataProductos}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <View>
          <Text>{item.title}</Text>
       
        </View>
      )}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({

})