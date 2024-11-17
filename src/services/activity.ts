// src/services/activity.ts
import { IActivity } from "../interfaces";
import { ActivityModel } from "../models";

const create = async (data: IActivity) => {
    const { name, description } = data;

    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);

    if (!name || !description || !startDate || !endDate) {
        throw new Error("Campos obrigatórios não informados");
    }

    const activity = await ActivityModel.create({
        name,
        description,
        startDate: startDate,
        endDate: endDate,
    });

    return { message: "Atividade criada com sucesso", activity };
};

const list = async () => {
    const activities = await ActivityModel.findAll();

    return { activities };
};

const detail = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const activity = await ActivityModel.findByPk(id);
    if (!activity) {
        throw new Error("Atividade não encontrada");
    }

    return activity;
};

const update = async (id: string, data: any) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const activity = await ActivityModel.findByPk(id);
    if (!activity) {
        throw new Error("Atividade não encontrada");
    }

    await activity.update(data);

    return { message: "Atividade atualizada com sucesso" };
};

const remove = async (id: string) => {
    
    if (!id) {
        throw new Error("ID não informado");
    }

    const activity = await ActivityModel.findByPk(id);
    if (!activity) {
        throw new Error("Atividade não encontrada");
    }

    await activity.destroy();

    return { message: "Atividade removida com sucesso" };
};

const activityService = {
    create,
    list,
    detail,
    update,
    remove  
   
};

export default activityService  