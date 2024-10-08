// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login, register, forgotPassword, resetPassword } from '../services/authservice';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const handleLogin = async (userData) => {
        const data = await login(userData);
        setUser(data); // You might want to store token in localStorage
    };

    const handleRegister = async (userData) => {
        await register(userData);
    };

    const handleForgotPassword = async (email) => {
        await forgotPassword(email);
    };

    const handleResetPassword = async (token, password) => {
        await resetPassword(token, password);
    };

    // Add useEffect to check for token or user state

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleRegister, handleForgotPassword, handleResetPassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
