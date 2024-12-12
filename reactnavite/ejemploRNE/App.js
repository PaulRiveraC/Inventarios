import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon } from '@rneui/base';
import { Input } from '@rneui/themed';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese nombre'
        label='Nombre'
      />
      <Text>{name}</Text>
      <Button
        title="Ok"
        icon={{
          name: 'star',
          type: 'SimpleLineIcons',
          size: 15,
          color: 'white',
        }}
        onPress={()=>{
          Alert.alert("Info", "Su nombre es: "+name)
        }}
      />
      <Button
        title="Cancel"
        icon={<Icon
          name='download'
          type='Octicons'
          color='white'
        />}
      />
      <Icon
          name='rocket-launch'
          type='MaterialIcons'
          color='black'
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
