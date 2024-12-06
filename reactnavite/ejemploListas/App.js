import { StatusBar } from "expo-status-bar"; // Importa el componente StatusBar de expo-status-bar
import { useState } from "react"; // Importa el hook useState de React
import { StyleSheet,Text,View,FlatList,TextInput,Button,Alert,} from "react-native"; // Importa componentes de React Native

// ARREGLO CON 3 OBJETOS
let personas = [
  { nombre: "Karen", apellido: "Mendez", cedula: "3298361002" },
  { nombre: "Gabriela", apellido: "Altamirano", cedula: "1755841002" },
  { nombre: "Genesis", apellido: "Mendoza", cedula: "1755783002" },
];

// esNuevo si se está creando una nueva persona o se está modificando una existente
let esNuevo = true;
// esta variable almacena el índice del arreglo del elemento seleccionado para edición
let indiceSeleccionado = -1;

export default function App() {
  const [txtCedula, setTxtCedula] = useState(""); // Estado para la cédula
  const [txtNombre, setTxtNombre] = useState(""); // Estado para el nombre
  const [txtApellido, setTxtApellido] = useState(""); // Estado para el apellido
  const [numElemento, setNumElemento] = useState(personas.length); // Estado para el número de elementos

  //-------------------------------------------------------
  let ItemPersona = ({ indice, persona }) => {
    // Componente para renderizar cada item
    return (
      // RETORNAR UN VIEW NOS AYUDA PARA RETORNAR VARIOS ELEMENTOS
      <View style={styles.intemPersonas}>
        <View style={styles.itemIndeces}>
          <Text> {indice} </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
            {persona.nombre} {persona.apellido}{" "}
          </Text>
          <Text style={styles.textoSecunadario}>{persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=" ✎ " // EDITAR
            color="goldenrod" // AQUI SE LE AGREGA EL COLOR PARA EL BOTON Y EN ESTE CASO SE ESCRIBE EL NOMBRE NO EL CODIGO DEL COLOR
            onPress={() => {
              setTxtNombre(persona.nombre);
              setTxtApellido(persona.apellido);
              setTxtCedula(persona.cedula);
              esNuevo = false;
              indiceSeleccionado = indice;
            }}
          />
          <Button
            title=" ✘ " // ELIMINAR
            color="red"
            onPress={() => {
              indiceSeleccionado = indice;
              personas.splice(indiceSeleccionado, 1); // SE BORRA O ELIMINA EL ELEMENTO
              console.log("Arreglo personas", personas);
              setNumElemento(personas.length);
            }}
          />
        </View>
      </View>
    );
  };

  //-------------------------------------------------------
  // FUNCIÓN LIMPIAR
  let limpiar = () => {
    setTxtCedula(""); // SE HACE UN SET A UNA VARIABLE DE ESTADO Y SE REPINTA LA PANTALLA
    setTxtNombre("");
    setTxtApellido("");
    esNuevo = true;
    indiceSeleccionado = -1;
  };

  // FUNCIÓN EXISTE PERSONA
  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula === txtCedula && i !== indiceSeleccionado) {
        return true;
      }
    }
    return false;
  };

  // FUNCIÓN GUARDAR PERSONA
  let guardarPersona = () => {
    // Verificamos si los campos están vacíos o son null
    if (
      txtNombre === "" ||
      txtApellido === "" ||
      txtCedula === "" ||
      txtNombre.trim() === "" ||
      txtApellido.trim() === "" ||
      txtCedula.trim() === ""
    ) {
      Alert.alert("ERROR", "Debe ingresar todos los campos");
    } else {
      // Si los campos están completos, continuamos con las siguientes validaciones

      // Verificamos que la cédula tenga exactamente 10 caracteres
      if (txtCedula.length !== 10) {
        Alert.alert("ERROR", "La cédula debe tener exactamente 10 caracteres");
      } else {
        // Si la cédula tiene 10 caracteres, verificamos si la persona ya existe
        if (existePersona()) {
          Alert.alert(
            "INFO",
            "Ya existe una persona con el número de cédula: " + txtCedula
          );
        } else {
          // Si no existe la persona, la agregamos al arreglo
          let persona = {
            nombre: txtNombre,
            apellido: txtApellido,
            cedula: txtCedula,
          };

          // Si es un nuevo registro, agregamos la persona al arreglo
          if (esNuevo) {
            personas.push(persona);
          } else {
            // Si estamos editando una persona, actualizamos la información
            personas[indiceSeleccionado] = persona;
          }

          // Limpiamos los campos
          limpiar();

          // Actualizamos la cantidad de elementos en el arreglo
          setNumElemento(personas.length);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.titulo}>PERSONAS</Text>

        <TextInput
          style={styles.txt} // AGREGAR CEDULA
          value={txtCedula}
          placeholder="INGRESE SU CEDULA"
          onChangeText={setTxtCedula}
          keyboardType="numeric"
          editable={esNuevo}
        />
        <TextInput // AGREGAR NOMBRE
          style={styles.txt}
          value={txtNombre}
          placeholder="INGRESE SU NOMBRE"
          onChangeText={setTxtNombre}
        />
        <TextInput // AGREGAR APELLIDO
          style={styles.txt}
          value={txtApellido}
          placeholder="INGRESE SU APELLIDO"
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title="Guardar" // BOTONES
            color="green"
            onPress={() => {
              guardarPersona();
            }}
          />
          <Button
            title="Nuevo" // BOTONES
            color="blue"
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text style={styles.numElemento}>ELEMENTOS: {numElemento}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({ index, item }) => {
            // concepto destructuring
            return <ItemPersona indice={index} persona={item} />;
          }} // fin concepto destructuring
          keyExtractor={item => item.cedula}
        />
      </View>
      <View style={styles.areaPiePagiana}>
        <Text>Autor: Paul Rivera</Text>
      </View>
    </View>
  );
}

//-------------------------------ESTILOS-----------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff", // Fondo azul claro
    flexDirection: "column", // EJE PRINCIPAL (VERTICAL)
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  titulo: {
    color: "#4682b4", // Azul acero
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    margin: 15,
  },
  lista: {
    // backgroundColor:"#87ceeb"
  },
  intemPersonas: {
    marginTop: 12,
    backgroundColor: "#e6e6fa", // Lavanda
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  textoPrincipal: {
    fontSize: 18,
    color: "#4b0082", // Índigo
  },
  textoSecunadario: {
    fontStyle: "italic",
    fontSize: 16,
    color: "#8a2be2", // Azul violeta
  },
  areaCabecera: {
    flex: 5.6,
    // backgroundColor: "#808080",
    justifyContent: "center",
    padding: 1,
  },
  areaContenido: {
    flex: 6,
    // backgroundColor: "#f4a460",
  },
  areaPiePagiana: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#8fbc8f",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 1, // ME AYUDA PARA QUE EL TEXTO SE PONGA EN LA PARTE DERECHA
  },
  itemIndeces: {
    // backgroundColor: "#deb887",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
  itemContenido: {
    // backgroundColor: "#ff7f50",
    flex: 6,
    padding: 1,
  },
  itemBotones: {
    flexDirection: "row",
    padding: 1,
    flex: 2,
    // backgroundColor: "#deb887",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 1,
  },
  txt: {
    borderColor: "#4682b4", // Azul acero
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  numElemento: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    color: "#4682b4", // Azul acero
  },
});