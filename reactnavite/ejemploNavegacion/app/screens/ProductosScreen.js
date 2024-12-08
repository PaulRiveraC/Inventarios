import { Button, StyleSheet, Text, View } from 'react-native';

export const Productos = ({navigation}) => {
    return <View style={styles.container}>
        <Text>Productos</Text>
        <Button
            title='Ir a Home'
            onPress={() => {
                navigation.navigate("Home");
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
});