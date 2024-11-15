// src/controllers/user.ts
import { Request, Response } from "express";
const create = async (req: Request, res?: Response, ) => {
    try {
        const result = await userController.create(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const list = async (req: Request, res?: Response, ) => {
    try {
        const result = await userController.list(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const detail = async (req: Request, res?: Response, ) => {
    try {
        const result = await userController.detail(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const update = async (req: Request, res?: Response, ) => {
    try {
        const result = await userController.update(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const remove = async (req: Request, res?: Response, ) => {
    try {
        const result = await userController.remove(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
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