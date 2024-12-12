import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GradeForm } from './app/screens/GradeForm';
import { ListGrades } from './app/screens/ListGrades';
import 'react-native-gesture-handler';

export default function App() {
  const stackGrade = createStackNavigator();
  return (
    <NavigationContainer>
      <stackGrade.Navigator>
        <stackGrade.Screen name="ListGradeNav" component={ListGrades} />
        <stackGrade.Screen name="GradeFormNav" component={GradeForm} />
      </stackGrade.Navigator>
      <View style={styles.pie}>
        <Text>Autor Paul Rivera</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  pie: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
});
