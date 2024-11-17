import { PersonModel } from "../models";
import { UserModel } from "../models/user";

// src/services/user.ts
const create = async (data: any) => {
    const {nome, telefone, email, endereco, name, password } = data;
    
    if (!nome || !telefone || !email || !endereco || !name || !password) {
        throw new Error("Campos obrigatórios não informados");
    }

    const person = await PersonModel.create({
        nome,
        telefone,
        email, 
        endereco,
    });

    const user = await UserModel.create({
        name,
        email,
        password,
        personId: person.id
    });

    return { message: "Usuário criado com sucesso", user };
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

const remove = async (id: string) => {
    if (!id) {
        throw new Error("ID não informado");
    }

    const user = await UserModel.findByPk(id);
    if (!user) {
        throw new Error("Usuário não encontrado");
    }

    const person = await PersonModel.findByPk(user.personId);
    if (!person) {
        throw new Error("Pessoa não encontrada");
    }

    await user.destroy();
    await person.destroy();

    return { message: "Usuário e pessoa removidos com sucesso" };
};

const userService = {
    create,
    list,
    detail,
    update,
    remove
};

export default userService