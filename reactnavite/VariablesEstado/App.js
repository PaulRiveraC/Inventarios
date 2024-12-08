import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useState } from 'react'

export default function App() {
  /*let arreglo=useState(0);
  const contadorEstado=arreglo[0];
  const setContadorEstado=arreglo[1];

  let contador=0;
  const incrementar=()=>{
    contador=contador+1;
    console.log("contador>>>>"+contador);
    setContadorEstado(contadorEstado+1);
    console.log("contador Estado>>>>"+contadorEstado);

  }*/

  const [contadorEstado, setContadorEstado] = useState(0);
  const [vidas, setcontadorVidas] = useState(5);


  const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
  }

  const decrementar = () => {
    setContadorEstado(contadorEstado - 1);
  }

  const perderVida = () => {
    if (vidas > 0) {
      setcontadorVidas(vidas - 1);
    } else {
      Alert.alert("ADVERTENCIA", "GAME OVER");
    }
  }

  const premiarVida = () =>{
    setcontadorVidas(vidas + 3);
  }

  return (
    <View style={styles.container}>
      <Text>Variables de Estado</Text>
      <Text>Contador de Estado: {contadorEstado} </Text>

      <Button
        title='Incrementar'
        onPress={incrementar}
      />

      <Button
        title='Decrementar'
        onPress={decrementar}
      />

      <Text>Vida: </Text>
      <Text>Contador estado: {vidas}</Text>
      <StatusBar style="auto" />

      <Button
        title='Perder vida'
        onPress={perderVida}
      />

      <Button
        title='Premiar'
        onPress={premiarVida}
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
});
