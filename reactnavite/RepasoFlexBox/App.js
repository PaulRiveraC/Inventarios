import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button,Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Button title="X"></Button>
        <Button title="y"></Button>
        <Button title="z"></Button>
      </View>
      <View style={styles.container3}>
        <View style={styles.container5}>

          <View style={styles.container7}>
          <Button title="BOTON 1"/>
          <Button title="BOTON 2"/>
          </View>
          <View style={styles.container8}>
            <Button title="OPERACION 1"/>
            <Button title="OPERACION 2"/>
            <Button title="OPERACION 3"/>
          </View>
        </View>
        <View style={styles.container6}>
          <Button title="ACCION 1"/>
          <Button title="ACCION 2"/>
          

        </View>
      </View>
      <View style={styles.container4}>
        <Button title="BOTON FINAL"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "column",
  },
  container2: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "row", //Ejece prencipal vertical
    justifyContent:'flex-end', //centrar vertical (principal)
    alignItems:"center",
    paddingTop:20,//SE AGREGA UN ESPACION PARA QUE LOS BOTONES SALGAN ASI
    paddingRight:20

  },
  container3: {
    flex: 6,
    backgroundColor: "red",
    flexDirection: "column",
  },
  container4: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"flex-start",
    paddingTop: 20, // Añade un espacio de 20 unidades desde el borde superior del contenedor
    paddingRight: 20, // Añade un espacio de 20 unidades desde el borde derecho del contenedor

  },
  container5: {
    flex: 4,
    backgroundColor: "brown",
    flexDirection: "row",

  },
  container6: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"flex-end",
    paddingTop: 20, // Añade un espacio de 20 unidades desde el borde superior del contenedor
    paddingRight: 20, // Añade un espacio de 20 unidades desde el borde derecho del contenedor
    

  },
  container7: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"stretch",
   
  },
  container8: {
    flex: 1,
    backgroundColor: "grey",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:"flex-start",
    paddingRight: 20, // Añade un espacio de 20 unidades desde el borde derecho del contenedor
  },
});
