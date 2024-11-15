// src/services/query.ts
import { Sequelize } from "sequelize";

export const initToQuery = (sequelize: Sequelize) => {
    // Pode ser usado para fazer customizações de queries ou metodos
    return (sequelize as any).query;
  };
  