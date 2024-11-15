// src/models/index.ts
import { Sequelize } from 'sequelize';
import clsService from '../services/cls'; // Ajuste para o seu path correto
import UserModel, { init as initUserModel } from './user'; // Importe corretamente a model User
import { initToQuery } from '../services/query';

const namespace = clsService.getNamespace();

// Ativa o CLS para contexto assíncrono
Sequelize.useCLS(namespace);

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'admin',
  database: 'db_tasks',
  logging: console.log,
  define: {
    freezeTableName: true,
  },
});

// Inicializando as models
(async () => {
  // Inicializa cada model
  await initUserModel(sequelize); // Agora estamos chamando o init de forma correta
  
  // Chama a função associate se houver associações
  if (UserModel.associate) {
    UserModel.associate(sequelize.models); // Passa os modelos para a função associate
  }
})();

export { sequelize, Sequelize, UserModel };
