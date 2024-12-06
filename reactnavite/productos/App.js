import { StatusBar } from 'expo-status-bar'; // Importa el componente StatusBar de expo-status-bar
import { FlatList, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Pressable } from 'react-native'; // Importa componentes de React Native
import { useState } from 'react'; // Importa el hook useState de React

// Arreglo con productos
let productos = [
  { nombre: "Manzanas", categoria: "Frutas", precioCompra: "0.50", precioVenta: "0.60", id: "200" },
  { nombre: "Pan", categoria: "Panadería", precioCompra: "0.30", precioVenta: "0.40", id: "201" },
  { nombre: "Jugo de Naranja", categoria: "Bebida", precioCompra: "1.00", precioVenta: "1.20", id: "202" },
  { nombre: "Queso", categoria: "Lácteos", precioCompra: "2.00", precioVenta: "2.50", id: "203" },
  { nombre: "Yogur", categoria: "Lácteos", precioCompra: "0.80", precioVenta: "1.00", id: "204" }
];

let esNuevo = true; // Variable para determinar si es un nuevo producto
let indiceSeleccionado = -1; // Índice del producto seleccionado para editar

export default function App() {
  // Estados para los campos de texto y el número de elementos
  const [txtId, setTxtId] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElementos, setNumElementos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para verificar si el producto ya existe
  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == txtId) {
        return true;
      }
    }
    return false;
  }

  // Función para verificar si hay campos vacíos
  let camposVacios = () => {
    if (txtId == null || txtNombre == null || txtCategoria == null || txtPrecioCompra == null
      || txtId == "" || txtNombre == "" || txtCategoria == "" || txtPrecioCompra == "") {
      return true;
    } else {
      return false;
    }
  }

  // Función para calcular el precio de venta
  let calcularPrecioVenta = (precioCompra) => {
    let floatPrecioCompra = parseFloat(precioCompra);
    let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
    return precioVentaCalculado.toFixed(2);
  }

  // Función para guardar el producto
  let guardarProducto = () => {
    if (camposVacios()) {
      Alert.alert("INFO", "Ingrese todos los campos obligatorios");
    } else {
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("INFO", "Ya existe un producto con el id");
        } else {
          let producto = {
            id: txtId,
            nombre: txtNombre,
            categoria: txtCategoria,
            precioCompra: txtPrecioCompra,
            precioVenta: calcularPrecioVenta(txtPrecioCompra)
          };
          productos.push(producto);
        }
      } else {
        productos[indiceSeleccionado].nombre = txtNombre;
        productos[indiceSeleccionado].categoria = txtCategoria;
        productos[indiceSeleccionado].precioCompra = txtPrecioCompra;
        productos[indiceSeleccionado].precioVenta = calcularPrecioVenta(txtPrecioCompra);
      }
      limpiar();
      setNumElementos(productos.length);
    }
  }

  // Componente para renderizar cada producto
  let ItemProducto = ({ indice, producto }) => {
    return (
      <View style={styles.producto}>
        <View style={styles.itemIndice}>
          <Text style={styles.texto1}>
            {indice + 1}
          </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.texto1}>
            {producto.nombre} ({producto.categoria})
          </Text>
          <Text style={styles.texto2}>
            USD {producto.precioVenta}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title="✎"
            color="goldenrod"
            onPress={() => {
              setTxtId(producto.id);
              setTxtNombre(producto.nombre);
              setTxtCategoria(producto.categoria);
              setTxtPrecioCompra(producto.precioCompra);
              setTxtPrecioVenta(producto.precioVenta);
              esNuevo = false;
              indiceSeleccionado = indice;
            }}
          />
          <Button
            title="✘"
            color="red"
            onPress={() => {
              productos.splice(indice, 1);
              setNumElementos(productos.length);
            }}
          />
        </View>
      </View>
    )
  }

  // Función para limpiar los campos de texto
  let limpiar = () => {
    setTxtId(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.areaCabecera}>
          <Text style={styles.titulo}>PRODUCTOS</Text>
          <TextInput style={styles.txt}
            value={txtId}
            placeholder='Ingrese id'
            onChangeText={setTxtId}
            keyboardType='numeric'
            editable={esNuevo}
          />
          <TextInput style={styles.txt}
            value={txtNombre}
            placeholder='Ingrese nombre'
            onChangeText={setTxtNombre}
          />
          <TextInput style={styles.txt}
            value={txtCategoria}
            placeholder='Ingrese categoría'
            onChangeText={setTxtCategoria}
          />
          <TextInput style={styles.txt}
            value={txtPrecioCompra}
            placeholder='Ingrese precio de compra'
            onChangeText={(text) => {
              setTxtPrecioCompra(text);
              setTxtPrecioVenta(calcularPrecioVenta(text));
            }}
            keyboardType='numeric'
          />
          <TextInput style={styles.txt}
            value={txtPrecioVenta}
            placeholder='Precio de venta'
            onChangeText={setTxtPrecioVenta}
            keyboardType='numeric'
            editable={false}
          />
          <View style={styles.areaBotones}>
            <Button
              title="Guardar"
              onPress={() => {
                guardarProducto();
              }}
            />
            <Button
              title="Nuevo"
              onPress={() => {
                limpiar();
              }}
            />
            <Text>Elementos: {numElementos}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.areaContenido}>
        <FlatList
          data={productos}
          renderItem={({ index, item }) => {
            return <ItemProducto indice={index} producto={item} />
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: PAUL RIVERA</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Fondo azul claro
    flexDirection: "column",
    paddingTop: 60,
  },
  titulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#4682b4", // Azul acero
    marginBottom: 10,
  },
  producto: {
    backgroundColor: "#e6e6fa", // Lavanda
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#3cb4ca', // Azul claro
    borderRadius: 10,
    flexDirection: "row",
  },
  texto1: {
    fontSize: 18,
    color: "#4b0082", // Índigo
  },
  texto2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8a2be2", // Azul violeta
  },
  areaCabecera: {
    flex: 4,
    paddingHorizontal: 10,
  },
  areaContenido: {
    flex: 6,
  },
  areaPie: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  itemIndice: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContenido: {
    paddingLeft: 5,
    flex: 6,
  },
  itemBotones: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
    borderRadius: 5
  },
  areaBotones: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  areaBotonesModal: {
    flexDirection: "row",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAceptar: {
    backgroundColor: '#5cf523', // Verde claro
    marginHorizontal: 10,
  },
  buttonCancelar: {
    backgroundColor: '#f53323', // Rojo
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  areaCabeceraModal: {
    marginBottom: 15,
  },
});