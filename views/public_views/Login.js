import { useState } from 'react';
import { useContext } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import { AuthContext } from "../../context/AuthContext";
import Button from '../../components/Button';
import { AuthServices } from '../../services/AuthServices';

export default function Login() {

    const { loginContext } = useContext(AuthContext);
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		if (email === '' || password === '') {
			Alert.alert('Credenciales incompletas', 'El correo y la contraseña son obligatorios');
			return;
		}
        await AuthServices.login(email, password, loginContext);
	};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicio de sesión</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button
                title='Login'
                onPress={handleLogin}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
		height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
		padding: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});