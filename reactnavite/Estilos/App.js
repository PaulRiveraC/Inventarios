import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="COMPONENTE 1" />
      <Button title="COMPONENTE 2" color="green"/>
      <Button title="COMPONENTE 3" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    //flexDirection: "row"
    justifyContent: "center"

  },
});
