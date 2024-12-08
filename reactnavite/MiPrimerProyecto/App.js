import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const despedirse = () => {
    Alert.alert("Mensaje", " Adiosito")
  }
  return (
    <View style={styles.container}>
      <Text>bienvenido al curso de RN: Paul Rivera</Text>
      <StatusBar style="auto" />
      <Button
        title="ok"
        //es una funcion que no recibe parametros
        onPress={() => {
          Alert.alert("Mensaje", " Hola desde el boton");
        }}
      />

      <Button
        title="Adios"
        //es una funcion que no recibe parametros
        onPress={
          despedirse
        }
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
