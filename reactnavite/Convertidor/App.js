import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function App() {
  const [dolares, setDolares] = useState("Ingrese monto");
  const [pesosMexicanos, setPesosMexicano] = useState("0.00 ");
  const [pesosColombianos, setPesosColombianos] = useState("0.00 ");
  const [euros, setEuros] = useState("0.00 ");

  const monedaMexicana = 18;
  const monedaColombiana = 4.0;
  const monedadEuros = 0.9;

  return (
    <View style={styles.container}>
      <Text>Conversor de dolares</Text>
      <Text> </Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={dolares}
        onChangeText={(moneda) => {
          setDolares(moneda);
        }}
      />
      <Text> </Text>
      <Text>Escoja a que desea convertir:</Text>
      <Text> </Text>

      <Button
        title="PESOS MEXICANOS"
        onPress={() => {
          const pesosMexicanos1 = parseFloat(dolares) * monedaMexicana;
          setPesosMexicano(pesosMexicanos1.toFixed(2));
        }}
      />
      <Text>VALOR {pesosMexicanos} PESOS</Text>
      <Button
        title="PESOS COLOMBIANOS"
        onPress={() => {
          const pesosColombianos1 = parseFloat(dolares) * monedaColombiana;
          setPesosColombianos(pesosColombianos1.toFixed(2));
        }}
      />
      <Text>VALOR {pesosColombianos} PESOS </Text>
      <Button
        title="EUROS"
        onPress={() => {
          const euros1 = parseFloat(dolares) * monedadEuros;
          setEuros(euros1.toFixed(2));
        }}
      />
      <Text>VALOR {euros} EUROS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaDeTexto: {
    borderColor: "Black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
