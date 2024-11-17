// src/controllers/activity.ts
import activityService from "../services/activity";
import { NextFunction, Request, Response } from "express";

const create = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await activityService.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const list = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await activityService.list(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const detail = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await activityService.detail(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const update = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const result = await activityService.update(req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const remove = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        const result = await activityService.remove(id as string);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

const activityController = {
    create,
    list,
    detail,
    update, 
    remove
};


export default activityController