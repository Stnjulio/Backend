// src/services/auth.ts
import { RegisterData } from '../interfaces';
import { UserModel } from '../models';

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

    return { message: "Login realizado com sucesso", user }; 
};

const logout = async () => {
    return { message: "Logout realizado com sucesso" }; 
};

const authService = {
    login,
    logout,
};

export default authService;