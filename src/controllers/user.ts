// src/controllers/user.ts
import { NextFunction, Request, Response } from "express";
import userService from "../services/user";

const create = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await userService.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const list = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await userService.list(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const detail = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await userService.detail(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await userService.update(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await userService.remove(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const userController = {
    create,
    list,
    detail,
    update,
    remove
};

export default userController