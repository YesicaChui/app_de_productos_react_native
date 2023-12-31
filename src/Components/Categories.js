import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoryItem from './CategoryItem'
const Categories = ({navigation}) => {
  return (
    <FlatList style={styles.container} data={categories}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <CategoryItem Categoria={item} navigation={navigation}/>
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