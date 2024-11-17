// src/services/auth.ts
import { RegisterData } from '../interfaces';

const login = async (data: any) => {
    return { message: "Login realizado com sucesso" }; 
};

const logout = async (data: any) => {
    return { message: "Logout realizado com sucesso" }; 
};

const register = async (data: RegisterData) => {
    return { message: "Usuário cadastrado com sucesso" };
};

const verifyUser = async (data: any) => {
    return { message: "Usuário verificado com sucesso" }; 
};

const authService = {
    login,
    logout,
    register,
    verifyUser
};

export default authService;