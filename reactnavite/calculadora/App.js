import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [num1, setNum1] = useState("Ingrese numero 1");
  const [num2, setNum2] = useState("Ingrese numero 2");
  const [respuesta, setRespuesta] = useState("");

  return (
    <View style={styles.container}>
      <Text>calculadora</Text>
      <Text>La respueta es: {respuesta}</Text>

      <StatusBar style="auto" />

      <TextInput
        style={styles.cajaTexto}
        value={num1}
        onChangeText={(txt) => {
          setNum1(txt);
        }}
      />

      <TextInput
        style={styles.cajaTexto}
        value={num2}
        onChangeText={(txt) => {
          setNum2(txt);
        }}
      />

      <Button
        title="Sumar"
        onPress={() => {
          let sumar = parseFloat(num1) + parseFloat(num2);
          setRespuesta(sumar);
        }}
      />

      <Button
        title="Restar"
        onPress={() => {
          let sumar = parseFloat(num1) - parseFloat(num2);
          setRespuesta(sumar);
        }}
      />

      <Button
        title="Multiplicar"
        onPress={() => {
          let sumar = parseFloat(num1) * parseFloat(num2);
          setRespuesta(sumar);
        }}
      />
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
