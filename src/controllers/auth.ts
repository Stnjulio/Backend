// src/controllers/auth.ts
import { Request, Response } from "express";
import authService from "../services/auth";


const login = async (req: Request, res?: Response, ) => {
    try {
        const result = await authService.login(req.body,);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const logout = async (req: Request, res?: Response,) => {
    try {
        const result = await authService.logout(req.body);
        res?.status(200).json(result);
    } catch (error) {
      
    }
}

const register = async (req: Request, res?: Response) => {
    try {
        const result = await authService.register(req.body);
        res?.status(200).json(result); // Retorna o resultado do registro
    } catch (error) {
        console.error(error); // Log de erro (opcional)
        res?.status(400).json({ message: 'Erro ao registrar usuário' }); // Retorna uma mensagem de erro em caso de falha
    }
};

const verifyUser = async (req: Request, res?: Response) => {
    try {
        const result = await authService.verifyUser(req.body);
        res?.status(200).json(result);
    } catch (error) {
       
    }
}
const authController = {
    login,
    logout,
    register,
    verifyUser  
};

export default authController

