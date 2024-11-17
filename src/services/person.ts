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

const list = async () => {
    const people = await PersonModel.findAll();
    return { message: "Lista de pessoas", people };
};

const detail = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const person = await PersonModel.findByPk(id);

    if (!person) {
        throw new Error("Pessoa não encontrada");
    }

    return { message: "Detalhes da pessoa", person };
};

const update = async (id: string, data: any) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const person = await PersonModel.findByPk(id);

    if (!person) {
        throw new Error("Pessoa não encontrada");
    }

    if (data.nome) {
        person.nome = data.nome;
    }

    if (data.telefone) {
        person.telefone = data.telefone;
    }

    if (data.email) {
        person.email = data.email;
    }

    if (data.endereco) {
        person.endereco = data.endereco;
    }

    await person.save();

    return { message: "Pessoa atualizada com sucesso", person };
};

const remove = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const person = await PersonModel.findByPk(id);

    if (!person) {
        throw new Error("Pessoa não encontrada");
    }

    await person.destroy();

    return { message: "Pessoa removida com sucesso" };
};

const personService = {
    create,
    list,
    detail,
    update,
    remove      
};

export default personService