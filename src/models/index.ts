
import { Sequelize } from 'sequelize';
import clsService from '../services/cls'; 
import UserModel, { init as initUserModel } from './user'; 


const namespace = clsService.getNamespace();
Sequelize.useCLS(namespace);

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

(async () => {
  await initUserModel(sequelize); 
  
  if (UserModel.associate) {
    UserModel.associate(sequelize.models); 
  }
})();

export { sequelize, Sequelize, UserModel };