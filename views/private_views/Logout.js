import { useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';
import { AuthServices } from '../../services/AuthServices';

export default function Logout() {

    const { logoutContext, userToken } = useContext(AuthContext);

    const handleLogout = async () => {
        await AuthServices.logout(logoutContext, userToken);
        Alert.alert('Cierre de sesión', 'Sesión cerrada correctamente');
    };

    return (
        <View>
            <Text>Logout</Text>
            <Button title='Cerrar sesión' onPress={handleLogout} buttonStyle={styles.button} textStyle={styles.buttonText}/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});