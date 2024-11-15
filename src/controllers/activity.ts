// src/controllers/activity.ts
import activityService from "../services/activity";
import { Request, Response } from "express";

const create = async (req: Request, res?: Response, ) => {
    try {
        const result = await activityService.create(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const list = async (req: Request, res?: Response, ) => {
    try {
        const result = await activityService.list(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const detail = async (req: Request, res?: Response, ) => {
    try {
        const result = await activityService.detail(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const update = async (req: Request, res?: Response, ) => {
    try {
        const result = await activityService.update(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const remove = async (req: Request, res?: Response, ) => {
    try {
        const result = await activityService.remove(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
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