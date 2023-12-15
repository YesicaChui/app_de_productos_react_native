import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'
const Categories = ({setCategoriaSeleccionada}) => {
  return (
    <FlatList style={styles.container} data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <CategoryItem Categoria={item} setCategoriaSeleccionada={setCategoriaSeleccionada}/>
      )}
    />
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    width:"80%"
  }
})