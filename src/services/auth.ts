// src/services/auth.ts
import { UserModel } from '../models'; // Certifique-se de importar o modelo corretamente
import bcrypt from 'bcryptjs';

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

const login = async (data: any) => {
    // Lógica de login
    return { message: "Login realizado com sucesso" }; // Simulação de sucesso
};

const logout = async (data: any) => {
    // Lógica de logout
    return { message: "Logout realizado com sucesso" }; // Simulação de sucesso
};

const register = async (data: RegisterData) => {
    const { name, email, password } = data;

    // Verificar se o e-mail já existe
    const existingUser = await UserModel.findOne({ where: { email } });
    if (existingUser) {
        throw new Error('E-mail já cadastrado.');
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo usuário
    const newUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
    });

    return { message: 'Usuário registrado com sucesso.', user: newUser };
};

const verifyUser = async (data: any) => {
    // Lógica para verificar o usuário
    return { message: "Usuário verificado com sucesso" }; // Simulação de sucesso
};

const authService = {
    login,
    logout,
    register,
    verifyUser
};

export default authService;
