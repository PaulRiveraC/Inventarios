import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './app/screens/HomeScreen';
import { Contacts } from './app/screens/ContactsScreen';
import { Productos } from './app/screens/ProductosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contactos" component={Contacts} />
        <Stack.Screen name="Productos" component={Productos} />
      </Stack.Navigator>
      <View style={styles.areaPie}>
        <Text>Autor: PAUL RIVERA</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaPie: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
});
