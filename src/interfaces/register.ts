// src/interfaces/register.ts
import { IAddress } from "./address";

export interface Register {
    name: string;
    email: string;
    password: string;
    nome: string;
    telefone: string;
    endereco: IAddress;
}