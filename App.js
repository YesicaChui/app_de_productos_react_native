import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useState } from 'react';

export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const [productoSeleccionado, setProductoSeleccionado] = useState("")

  return (
    <View style={styles.container}>
      {productoSeleccionado
        ? <ItemDetail productoSeleccionado={productoSeleccionado} 
        setProductoSeleccionado={setProductoSeleccionado}
        />
        : categoriaSeleccionada
          ? <ItemListCategories 
          setProductoSeleccionado={setProductoSeleccionado}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
          />
          : <Home setCategoriaSeleccionada={setCategoriaSeleccionada} />}
      {/* <Home/> */}
      {/* <ItemListCategories/>  */}
      {/* <ItemDetail/> */}
    </View>
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
