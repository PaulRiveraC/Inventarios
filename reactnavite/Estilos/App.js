import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="COMPONENTE 1" />
      <Button title="COMPONENTE 2" color="green" />
      <Button title="COMPONENTE 3" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // UNO ABAJO DEL OTRO
    //flexDirection: "column",
    //UNO A LADO DEL OTRO 
    //flexDirection: "row",
    //al eje principal
    //justifyContent: "center",
    //justifyContent: "flex-star",
    //justifyContent: "flex-end",
    //justifyContent: "space-around",
    //justifyContent: "space-between",
    //justifyContent: "space-evenly",


    //al eje secuendario
    //alignItems: "center",
    //alignItems:"flex-start"
    //alignItems: "stretch"
    //alignItems: "flex-end"







  },
});
