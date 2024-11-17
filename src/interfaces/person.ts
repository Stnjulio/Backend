// src/interfaces/person.ts
import { IAddress } from "./address";

export interface IPerson {
  nome: string;
  telefone: string;
  email: string;    
  endereco: IAddress;
  userId: number;
};

