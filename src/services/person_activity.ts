import { IPersonActivity } from "../interfaces/person_activity";
import { PersonActivityModel } from "../models";

// src/services/person_activity.ts
const create = async (data: IPersonActivity) => {
    const { personId, activityId } = data;

    if (!personId || !activityId) {
        throw new Error("Campos obrigatórios não informados");
    }

    const personActivity = await PersonActivityModel.create({
        personId,
        activityId,
    });

    return { message: "Atividade criada com sucesso", personActivity };
};

const list = async () => {
    const personActivities = await PersonActivityModel.findAll();

    return { message: "Lista de pessoas", personActivities };
};

const detail = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const personActivity = await PersonActivityModel.findByPk(id);

    if (!personActivity) {
        throw new Error("Pessoa não encontrada");
    }

    return { message: "Detalhes da pessoa", personActivity };
};

const update = async (id: string, data: any) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const personActivity = await PersonActivityModel.findByPk(id);

    if (!personActivity) {
        throw new Error("Pessoa não encontrada");
    }

    await personActivity.update(data);

    return { message: "Pessoa atualizada com sucesso" };
};

const remove = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const personActivity = await PersonActivityModel.findByPk(id);

    if (!personActivity) {
        throw new Error("Pessoa não encontrada");
    }

    await personActivity.destroy();

    return { message: "Pessoa removida com sucesso" };
};

const person_activityService = {
    create,
    list,
    detail,
    update,
    remove      
};

export default person_activityService