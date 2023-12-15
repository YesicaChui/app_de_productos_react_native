import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { useState } from 'react';

export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")

  return (
    <View style={styles.container}>
      {categoriaSeleccionada
        ? <ItemListCategories />
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
