import axios from "axios";
import { env } from "../constants/env";
import { Alert } from "react-native";

const login = async (email, password, loginContext) => { 
    try {
        const response = await axios.post(`${env.API_URL}/api/login`, {
            email: email,
            password: password,
        });
        console.log(response.data);
        const { token, user } = response.data;
        loginContext(token, user);
        Alert.alert('Bienvenido', `Hola ${user.name}`);
    }
    catch (error) {
        Alert.alert('Error', 'Credenciales incorrectas');
        console.log(error);
    }
};

const logout = async (logoutContext, userToken) => {
    try {
        const response = await axios.post(`${env.API_URL}/api/logout`, null, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        console.log('Cierre de sesión exitoso:', response.data);
        logoutContext();
    } catch (error) {
        console.log('Error al cerrar sesión');
        console.log(error.response ? error.response.data : error.message);
    }
};


export const AuthServices = {
    login, logout
};