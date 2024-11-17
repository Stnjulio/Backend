import { IPerson } from "../interfaces";
import { PersonModel } from "../models";

// src/services/person.ts
const create = async (data: IPerson) => {
    const { nome, telefone, email, endereco } = data;

    if (!nome || !telefone || !email || !endereco) {
        throw new Error("Campos obrigatórios não informados");
    }

    const person = await PersonModel.create({
        nome,
        telefone,
        email, 
        endereco,
    });

    return { message: "Pessoa criada com sucesso", person };
};

const list = async (data: any) => {
    return { message: "Login realizado com sucesso" }; // Simulação de sucesso
};

const detail = async (data: any) => {
    return { message: "Login realizado com sucesso" }; // Simulação de sucesso
};

const update = async (data: any) => {
    return { message: "Login realizado com sucesso" }; // Simulação de sucesso
};

const remove = async (data: any) => {
    return { message: "Login realizado com sucesso" }; // Simulação de sucesso
};

const personService = {
    create,
    list,
    detail,
    update,
    remove      
};

export default personService