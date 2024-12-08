import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react'

export default function App() {
  // let nombre  = "Ingrese su nombre";
  const [nombre, setNombre] = useState("Ingrese su nombre");
  const [apellido, setApellido] = useState("Ingrese su apellido");
  const [nombreCompleto, setNombreCompleto] = useState("");


  return (

    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text>Hola {nombreCompleto}</Text>

      <TextInput
        style={styles.cajaTexto}
        value={nombre}
        //cada vez qye ungreso un texto se dispara
        onChangeText={(txt) => {
          //console.log("valor>>>>"+txt);
          //nombre=txt;
          setNombre(txt);
        }}
      />

      <TextInput
        style={styles.cajaTexto}
        value={apellido}
        onChangeText={(txt) => {
          setApellido(txt);
        }}
      />

      <Button
        title="Saludar"
        onPress={() => {
          let completo = nombre + " " + apellido;
          setNombreCompleto(completo);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    //distancia desde el inicio
    paddingTop: 5,
    //distancia en ambos valores
    paddingHorizontal: 10
  }
});
