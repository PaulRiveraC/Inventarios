import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableHighlight, Modal, Pressable } from 'react-native';
import { useState } from 'react';

// Lista de productos iniciales
let productos = [
  { nombre: "Manzanas", categoria: "Frutas", precioCompra: "0.50", precioVenta: "0.60", id: "200" },
  { nombre: "Pan", categoria: "Panadería", precioCompra: "0.30", precioVenta: "0.40", id: "201" },
  { nombre: "Jugo de Naranja", categoria: "Bebida", precioCompra: "1.00", precioVenta: "1.20", id: "202" },
  { nombre: "Queso", categoria: "Lácteos", precioCompra: "2.00", precioVenta: "2.50", id: "203" },
  { nombre: "Yogur", categoria: "Lácteos", precioCompra: "0.80", precioVenta: "1.00", id: "204" }
];

let esNuevo = true; // Bandera para saber si es un producto nuevo
let indiceSeleccionado = -1; // Índice del producto seleccionado

export default function App() {

  // Estados para los campos de texto y otros elementos de la interfaz
  const [txtId, setTxtId] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState();
  const [txtPrecioVenta, setTxtPrecioVenta] = useState();
  const [numElementos, setNumElementos] = useState(productos.length);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para verificar si un producto ya existe
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
    if (txtId == null || txtNombre == null || txtCategoria == null || txtPrecioCompra == null || txtId == "" || txtNombre == "" || txtCategoria == "" || txtPrecioCompra == "") {
      return true;
    } else {
      return false;
    }
  }

  // Función para guardar un producto
  let guardarProducto = () => {
    if (camposVacios()) {
      Alert.alert("INFO", "Ingrese todos los campos obligatorios");
    } else {
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("INFO", "Ya existe un producto con el id");
        } else {
          let floatPrecioCompra = parseFloat(txtPrecioCompra);
          let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
          precioVentaCalculado = precioVentaCalculado.toFixed(2);
          let producto = {
            id: txtId,
            nombre: txtNombre,
            categoria: txtCategoria,
            precioCompra: txtPrecioCompra,
            precioVenta: precioVentaCalculado
          };
          productos.push(producto);
        }
      } else {
        productos[indiceSeleccionado].nombre = txtNombre;
        productos[indiceSeleccionado].categoria = txtCategoria;
        productos[indiceSeleccionado].precioCompra = txtPrecioCompra;
        let floatPrecioCompra = parseFloat(productos[indiceSeleccionado].precioCompra);
        let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
        productos[indiceSeleccionado].precioVenta = precioVentaCalculado.toFixed(2);
      }
      limpiar();
      setNumElementos(productos.length);
    }
  }

  // Componente para renderizar un producto en la lista
  let ItemProducto = ({ indice, producto }) => {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#6592d0"
        onPress={() => {
          setTxtId(producto.id);
          setTxtNombre(producto.nombre);
          setTxtCategoria(producto.categoria);
          setTxtPrecioCompra(producto.precioCompra);
          setTxtPrecioVenta(producto.precioVenta);
          esNuevo = false;
          indiceSeleccionado = indice;
        }}>

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
              title=" X "
              color="red"
              onPress={() => {
                setModalVisible(true);
                indiceSeleccionado = indice;
              }}
            />
          </View>
        </View>
      </TouchableHighlight>

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.areaCabeceraModal}>
              <Text style={styles.modalText}>¿Está seguro que quiere eliminar?</Text>
            </View>
            <View style={styles.areaBotonesModal}>
              <Pressable
                style={[styles.button, styles.buttonAceptar]}
                onPress={() => {
                  productos.splice(indiceSeleccionado, 1);
                  setNumElementos(productos.length);
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Aceptar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancelar]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
              let floatPrecioCompra = parseFloat(text);
              let precioVentaCalculado = floatPrecioCompra + (floatPrecioCompra * 0.20);
              setTxtPrecioVenta(precioVentaCalculado.toFixed(2));
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
    color: "#ff6347", // Rojo tomate
    marginBottom: 10,
  },
  producto: {
    backgroundColor: "#ffe4e1", // Rosa claro
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#ff69b4', // Rosa fuerte
    borderRadius: 10,
    flexDirection: "row",
  },
  texto1: {
    fontSize: 18,
    color: "#ff4500", // Naranja rojo
  },
  texto2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff1493", // Rosa profundo
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
    borderColor: "#ff6347", // Rojo tomate
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
    backgroundColor: '#fffacd', // Amarillo claro
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
    backgroundColor: '#32cd32', // Verde lima
    marginHorizontal: 10,
  },
  buttonCancelar: {
    backgroundColor: '#ff4500', // Naranja rojo
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