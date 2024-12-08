import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button,Alert } from 'react-native';
import { useState } from "react";

export default function App() {
  const [estatura, setEstatura] = useState();
  const [peso, setPeso] = useState();
  const [Resultado, setResultado] = useState();


  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Para calcular su índice de masa corporal, ingrese su estatura y peso.
      </Text>

      <Text> Ingrese Estatura en centimetros
      </Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={estatura}
        onChangeText={setEstatura}
        placeholder="_____________________________"
      />

      <Text> Ingrese Peso en Kilogramos
      </Text>
      <TextInput
        style={styles.cajaDeTexto}
        value={peso}
        onChangeText={setPeso}
        placeholder="_____________________________"
      />
      <Button
        title="Calcular"
        onPress={() => {
          let pesoFloat = parseFloat(peso);
          let estaturaFloat = parseFloat(estatura);
          const estaturaMetros = estaturaFloat / 100;
          const imc = pesoFloat / (estaturaMetros * estaturaMetros);
          let resultado="";
          if (imc < 18.5) {
            resultado="SU PESO ES INFERIOR AL NORMAL";
          }
          if (imc >= 18.5 && imc <= 25) {
            resultado=("SU PESO ES NORMAL");
          }
          if (imc >= 25 && imc <= 30) {
            resultado=("SU PESO ES SUPERIOR AL NORMAL");
          }
          if (imc > 30) {
            resultado=("TIENE OBESIDAD");
          }

          setResultado(imc.toFixed(2)+ " "+resultado);

        }}

      />
      <Text> Resultado:

      </Text>
      <TextInput
          style={styles.cajaDeTexto}
          value={Resultado}
          onChangeText={setResultado}
          placeholder="_____________________________"
        />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: "column", //EJE PRINCIPAL (VERTICAL)
    justifyContent: "flex-start", //vertical
    alignItems: "stretch", //EJE SECUNDARIO(HORIZONTAL)
    paddingHorizontal: 10, //AYUDA CON UN ESPACIO DEL LADO DERECHO COMO IZQUIERDO
    // paddingtop: 10 //DISTANCIA DE HACIA AFUERA

  },
  titulo: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold",
    textAlign: "center",//PARA COLOCAR LA POSISION DEL TEXTO
    //paddingtop: 10, //DISTANCIA DE HACIA AFUERA
    //paddingHorizontal: 10, //AYUDA CON UN ESPACIO DEL LADO DERECHO COMO IZQUIERDO
    marginTop: 30


  }
});
