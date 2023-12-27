import { StyleSheet, Text, View } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'
const Home = ({navigation}) => {
  return (
    <>
     
      <Categories navigation={navigation} />
    </>
  )
}
export default Home

const styles = StyleSheet.create({})