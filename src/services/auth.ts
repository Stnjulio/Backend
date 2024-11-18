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

    return { message: "Login realizado com sucesso", user }; 
};

const logout = async () => {
    return { message: "Logout realizado com sucesso" }; 
};

const clarify = (token?: string): ILogin => {
  if (!token) throw { message: `auth.error.missing_token`, status: 401 };

  if (token.match(/^[B|b]earer /g)) {
    token = token.replace(/[B|b]earer /g, '');

    try {
      return verify(token, process.env.JWT_SECRET || 'your-secret-key') as ILogin;
    } catch (error) {
      throw { message: `auth.error.invalid`, error, status: 401 };
    }
  }

  throw { message: `auth.error.invalid_token_type` };
}
  
   

const authService = {
    login,
    logout,
    clarify
};

export default authService;