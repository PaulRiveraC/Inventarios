import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const funFinalizar = () =>{
    Alert.alert("Alerta","Su sesión ha finalizado");
  }

  return (
    <View style={styles.container}>
      <Text>RETO 20</Text>
      <StatusBar style="auto" />
      <Button 
        title="FINALIZAR"
        onPress={funFinalizar}
      />
      <Button 
        title="INICIAR"
        onPress={() =>{
          Alert.alert("Alerta","Su sesión ha iniciado"); 
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
});
