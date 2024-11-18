// src/controllers/person.ts
import { NextFunction, Request, Response } from "express";
import person_activityService from "../services/person_activity";

const create = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await person_activityService.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const list = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await person_activityService.list();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const detail = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await person_activityService.detail(id as string);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await person_activityService.update(id as string, req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await person_activityService.remove(id as string);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const person_activityController = {
    create,
    list,
    detail,
    update,
    remove
    
};

export default person_activityController