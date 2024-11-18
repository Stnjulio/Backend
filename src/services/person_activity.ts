// src/services/person_activity.ts
import { IPersonActivity } from "../interfaces/person_activity";
import { PersonActivityModel } from "../models";

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
    remove      
};

export default person_activityService