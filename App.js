
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useState } from 'react';
import { useFonts } from "expo-font"

export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const [productoSeleccionado, setProductoSeleccionado] = useState("")
  const [fontLoaded] = useFonts({
    josefin: require("./assets/fonts/josefin.ttf"),

  })
  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={'black'}
        barStyle={'default'}     
      />
      <View style={styles.container}>
        {productoSeleccionado
          ? <ItemDetail productoSeleccionado={productoSeleccionado}
            setProductoSeleccionado={setProductoSeleccionado}
          />
          : categoriaSeleccionada
            ? <ItemListCategories
              setProductoSeleccionado={setProductoSeleccionado}
              setCategoriaSeleccionada={setCategoriaSeleccionada}
              categoriaSeleccionada={categoriaSeleccionada}
            />
            : <Home setCategoriaSeleccionada={setCategoriaSeleccionada} />}
        {/* <Home/> */}
        {/* <ItemListCategories/>  */}
        {/* <ItemDetail/> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
