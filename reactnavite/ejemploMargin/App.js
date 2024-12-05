import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import { useState } from "react";


export default function App() {
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJERCICIO MARGIN</Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={nombre}
        onChangeText={setNombre}
        placeholder="INGRESE SU NOMBRE"
      />
      <TextInput
        style={styles.cajaDeTexto}
        value={apellido}
        onChangeText={setApellido}
        placeholder="INGRESE SU APELLIDO"
      />

      <Button
        title="OK"
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column", //EJE PRINCIPAL (VERTICAL)
    justifyContent: "center", //vertical
    alignItems: "stretch", //EJE SECUNDARIO(HORIZONTAL)
    paddingHorizontal: 10 //AYUDA CON UN ESPACIO DEL LADO DERECHO COMO IZQUIERDO
  },
  cajaDeTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,//del borde hacia adendro
    paddingHorizontal: 10,
    marginBottom: 10 //DISTANCIA DE HACIA AFUERA
  },
  titulo:{
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign:"center"//PARA COLOCAR LA POSISION DEL TEXTO
  }
});
