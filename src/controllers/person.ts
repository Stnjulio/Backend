// src/controllers/person.ts
import { NextFunction, Request, Response } from "express";
import personService from "../services/person";

const create = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await personService.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const list = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await personService.list();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const detail = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await personService.detail(id as string);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await personService.update(id as string, req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await personService.remove(id as string);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const personController = {
    create,
    list,
    detail,
    update,
    remove
    
};

export default personController