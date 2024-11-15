// src/config/db.ts
import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

// Configuração da conexão com o banco
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Ou 'postgres', 'sqlite', etc., dependendo do seu banco
    logging: false, // Mude para true para exibir logs SQL no console
  }
)

export default sequelize