// src/controllers/person.ts
import { Request, Response } from "express";
import personService from "../services/person";
const create = async (req: Request, res?: Response, ) => {
    try {
        const result = await personService.create(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const list = async (req: Request, res?: Response, ) => {
    try {
        const result = await personService.list(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const detail = async (req: Request, res?: Response, ) => {
    try {
        const result = await personService.detail(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const update = async (req: Request, res?: Response, ) => {
    try {
        const result = await personService.update(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
    }
}

const remove = async (req: Request, res?: Response, ) => {
    try {
        const result = await personService.remove(req.body);
        res?.status(200).json(result);
    } catch (error) {
     
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