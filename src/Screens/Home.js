import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
const Home = ({setCategoriaSeleccionada}) => {
  return (
    <>
      <Header title='CATEGORIAS'/>
      <Categories setCategoriaSeleccionada={setCategoriaSeleccionada} />
    </>
  )
}
export default Home

const styles = StyleSheet.create({})