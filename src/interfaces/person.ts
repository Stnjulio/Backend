// src/interfaces/person.ts
import { IAddress } from "./address";

export interface IPerson {
  id: string
  nome: string;
  telefone: string;
  email: string;    
  endereco: IAddress;
  userId: number;
};

