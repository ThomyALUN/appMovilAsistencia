import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadAuthData = async () => {
            const token = await AsyncStorage.getItem('userToken');
            const userData = await AsyncStorage.getItem('user');
            setUserToken(token);
            if (userData) {
                setUser(JSON.parse(userData));
            }
        };
        loadAuthData();
    }, []);

    const loginContext = async (token, userData) => {
        setUserToken(token);
        setUser(userData);
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
    };

    const logoutContext = async () => {
        setUserToken(null);
        setUser(null);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ userToken, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    );
};
