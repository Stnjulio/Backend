import { Sequelize } from 'sequelize';
import clsService from '../services/cls';
import { init as initUserModel, UserModel } from './user';
import { init as initActivityModel, ActivityModel } from './activity';
import { init as initAddressModel, AddressModel } from './address';
import { init as initPersonModel, PersonModel } from './person';
import { init as initPersonActivityModel, PersonActivityModel } from './person_activity';
import { init as initPersonAddressModel, PersonAddressModel } from './person_address';

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
  await initActivityModel(sequelize);
  await initAddressModel(sequelize);
  await initPersonModel(sequelize);
  await initPersonActivityModel(sequelize);
  await initPersonAddressModel(sequelize);

  // Configurar associações
  Object.values(sequelize.models).forEach((model: any) => {
    if (model.associate) {
      model.associate(sequelize.models);
    }
  });
})();

export {
  sequelize,
  Sequelize,
  UserModel,
  ActivityModel,
  AddressModel,
  PersonModel,
  PersonActivityModel,
  PersonAddressModel,
};
