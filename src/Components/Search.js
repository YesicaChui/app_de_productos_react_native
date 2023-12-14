import { StyleSheet, TextInput, View, Pressable } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';


const Search = ({textSearch,setTextSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Buscar Producto'
        value={textSearch}
        onChange={text => setTextSearch(text)}
      />
      <Pressable>
        <AntDesign name='search1' color={'green'} size={30} />
      </Pressable>
      <Pressable onPress={() => setTextSearch("")}>
        <MaterialIcons name='cancel' color={'green'} size={30} />
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: "row",
    gap: 10,

    justifyContent: "space-between",
    backgroundColor: colors.color1
  },
  input: {
    width: "70%",
    backgroundColor: colors.color5,
    padding: 5,
    borderRadius: 5,
  }
})