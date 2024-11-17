// src/services/activity.ts
import { IActivity } from "../interfaces";
import { ActivityModel } from "../models";

const create = async (data: IActivity) => {
    const { name, description } = data;

    // Cast das variaveis para o tipo date
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    
    // Validação dos campos obrigatórios
    if (!name || !description || !startDate || !endDate) {
        throw new Error("Campos obrigatórios não informados");
    }

    // Criação do registro no banco de dados
    const activity = await ActivityModel.create({
        name,
        description,
        startDate: startDate,
        endDate: endDate,
    });

    return { message: "Atividade criada com sucesso", activity };
};

const list = async (data: any) => {
    return { message: "lista de atividades" }; // Simulação de sucesso
};

const detail = async (data: any) => {
    return { message: "detalhes da atividade" }; // Simulação de sucesso
};

const update = async (data: any) => {
    return { message: "atividade atualizada com sucesso" }; // Simulação de sucesso
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