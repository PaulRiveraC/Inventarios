import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}></View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor4}></View>
        <View style={styles.contenedor5}>
          <View style={styles.contenedor6}></View>
          <View style={styles.contenedor7}>
            <Button title="BOTON 1" />
            <Button title="BOTON 2" />
            <Button title="BOTON 3" />
          </View>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    flexDirection: "column",
  },
  contenedor2: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "column",
  },
  contenedor3: {
    flex: 3,
    backgroundColor: "green",
    flexDirection: "column",
  },
  contenedor4: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "column",
  },
  contenedor5: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
  },
  contenedor6: {
    flex: 1,
    backgroundColor: "pink",
    flexDirection: "column",
  },
  contenedor7: {
    flex: 2,
    backgroundColor: "purple",
    flexDirection: "column", //Ejece prencipal vertical
    //justifyContent:'center',//centrar vertical (principal)
    justifyContent:'space-around', 
    alignItems:"stretch"//Ocupa todo el espacio horizontal

  },
});
