import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colors } from '../Global/colors';
import { useState } from 'react'

const Search = ({ setKeyword }) => {
  const [textSearch, setTextSearch] = useState("")
  const [mensajeError, setMensajeError] = useState("")
  const limpiarInput = () => {
    setMensajeError("")
    setTextSearch("")
  }
  const validarInput = () => {
    const expresion = /\d/
    if ((expresion.test(textSearch))) {
      setMensajeError("Ingrese Solo Letras")
      console.log("error")
    } else {
      setKeyword(textSearch)

    }
  }
  return (
    <View style={styles.containerInput}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Buscar Producto'
          value={textSearch}
          onChangeText={text => setTextSearch(text)}
        />
        <Pressable onPress={() => validarInput()}>
          <AntDesign name='search1' color={'green'} size={30} />
        </Pressable>
        <Pressable onPress={() => limpiarInput()}>
          <MaterialIcons name='cancel' color={'green'} size={30} />
        </Pressable>
      </View>
      {mensajeError ? <Text style={styles.textError}>{mensajeError}</Text> : ""}
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
  },
  textError: {
    fontSize: 20,
    color: "red",
    marginLeft: 25,
    marginBottom: 10
  },
  containerInput: {
    backgroundColor: colors.color1,
    marginBottom: 20
  }
})