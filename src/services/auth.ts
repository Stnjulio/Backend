// src/services/auth.ts
import { RegisterData } from '../interfaces';
import { UserModel } from '../models'; 
import bcrypt from 'bcryptjs';

const login = async (data: any) => {
    return { message: "Login realizado com sucesso" }; 
};

const logout = async (data: any) => {
    return { message: "Logout realizado com sucesso" }; 
};

const register = async (data: RegisterData) => {
    const { name, email, password } = data;

    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('E-mail já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
    });

    return { message: 'Usuário registrado com sucesso.', user: newUser };
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