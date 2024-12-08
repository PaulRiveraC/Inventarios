import { Button, StyleSheet, Text, View } from 'react-native';

export const Home = ({navigation}) => {
    return <View style={styles.container}>
        <View style={styles.cabecera}>
            <Text>Home</Text>
        </View>
        <View style={styles.botones}>
            <Button
                title='Contactos'
                onPress={() => {
                    navigation.navigate("Contactos");
                }}
            />
            <Button
                title='Productos'
                onPress={() => {
                    navigation.navigate("Productos");
                }}
            />
        </View> 
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    cabecera: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    botones: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "space-around"
    }
});