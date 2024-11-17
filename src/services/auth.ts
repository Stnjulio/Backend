// src/services/auth.ts
import { RegisterData } from '../interfaces';

const login = async (data: any) => {
    return { message: "Login realizado com sucesso" }; 
};

const logout = async (data: any) => {
    return { message: "Logout realizado com sucesso" }; 
};

const verifyUser = async (data: any) => {
    return { message: "Usuário verificado com sucesso" }; 
};

const authService = {
    login,
    logout,
    verifyUser
};

export default authService;