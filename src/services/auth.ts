// src/services/auth.ts
import { backend } from '../config/environment';
import { RegisterData } from '../interfaces';
import { ILogin } from '../interfaces/auth';
import { UserModel } from '../models';
import { sign, verify } from 'jsonwebtoken'

const login = async ({ email, password }: RegisterData) => {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
        throw new Error("Usu rio ou senha incorretos");
    }

    const user_password: string = password

    const isValidPassword = await user.checkPassword(user_password);

    if (!isValidPassword) {
        throw new Error("Usu rio ou senha incorretos");
    }

    const accessToken = sign(user.toJSON(), backend.jwt_secret, { expiresIn: '10h' });
    const refreshToken = sign(user.toJSON(), backend.jwt_secret, { expiresIn: '7d' });

    return { message: "Login realizado com sucesso", accessToken, refreshToken }; 
};

const logout = async () => {
    return { message: "Logout realizado com sucesso" }; 
};


   

const authService = {
    login,
    logout,
    
};

export default authService;