// src/controllers/auth.ts
import { NextFunction, Request, Response } from "express";
import authService from "../services/auth";

const login = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await authService.login(req.body,);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await authService.logout();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const authController = {
    login,
    logout,
};

export default authController