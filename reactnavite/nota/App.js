import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GradeForm } from './app/screens/GradeForm';
import { ListGrades } from './app/screens/ListGrades';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContenidoA } from './app/screens/ContenidoA';
import { ContenidoB } from './app/screens/ContenidoB';
import { Icon } from '@rneui/base';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  const TabNav = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='TabContenidoA'
          component={ContenidoA}
          options={{
            headerShown: false,
            tabBarLabel: "Configuracion",
            tabBarIcon: ({ size, color }) => {
              return <Icon name='user' size={size} color={color} type='ant-design' />;
            }
          }}
        />
        <Tab.Screen
          name='TabContenidoB'
          component={ContenidoB}
          options={{
            headerShown: false,
            tabBarLabel: "Acerca De",
            tabBarIcon: ({ size, color }) => {
              return <Icon name='mail' size={size} color={color} type='ant-design' />;
            }
          }}
        />
      </Tab.Navigator>
    )
  }

  const DrawerNav = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name='ListGradesNav'
          component={StackNav}
          options={{
            title: "Navegacion Stack"
          }}
        />
        <Drawer.Screen
          name='TabNav'
          component={TabNav}
          options={{
            title: "Navegacion Tab"
          }}
        />
      </Drawer.Navigator>
    )
  }

  const StackNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ListGradesNav"
          component={ListGrades}
        />
        <Stack.Screen
          name="GradeFormNav"
          component={GradeForm}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <DrawerNav />
        <Text>Autor: Paul Rivera</Text>
    </NavigationContainer>
  );



}
