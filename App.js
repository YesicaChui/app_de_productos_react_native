
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import { useState } from 'react';
import { useFonts } from "expo-font"
import Navigator from './src/navigation/Navigator';
export default function App() {

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
      <Navigator/>
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
