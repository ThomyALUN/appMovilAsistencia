import axios from "axios";
import { Alert } from "react-native";

const login = async (email, password, loginContext) => { 
    try {
        const response = await axios.post('http://192.168.1.2:8000/api/login', {
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

const logout = async (logoutContext) => {
    logoutContext();
    try {
        await axios.post('http://192.168.1.2:8000/api/logout',{
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};

export const AuthServices = {
    login, logout
};