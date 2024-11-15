// src/services/query.ts
import { Sequelize } from "sequelize";

export const initToQuery = (sequelize: Sequelize) => {
    return (sequelize as any).query;
  };
  