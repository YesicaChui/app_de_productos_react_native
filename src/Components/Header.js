import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const Header = ({ title = "producto", setCategoriaSeleccionada, setProductoSeleccionado }) => {
  const volver = () => {
    if (title === "DETALLE PRODUCTO") {
      setProductoSeleccionado("")
    } else {
      setCategoriaSeleccionada("")
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: "josefin",
    fontWeight: "800",
    textTransform:'capitalize'
  },
  textoVolver: {
    borderRadius: 10,
    backgroundColor: colors.color3,
    padding: 10,
    fontSize: 16,
    fontWeight: "900"
  }
})