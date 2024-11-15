// src/models/user.ts
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { IUserAttributes } from '../interfaces/user';

// Definir o modelo User
export default class UserModel extends Model<IUserAttributes, Optional<IUserAttributes, 'id'>> implements IUserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  // Método para realizar associações com outras models, se necessário
  static associate(models: any) {
    // Exemplo de associação:
    // UserModel.hasMany(models.Task, { foreignKey: 'userId' });
  }
}

// Inicializa o modelo User
export const init = async (sequelize: Sequelize) => {
  UserModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,           // A instância do Sequelize
      modelName: 'user',   // O nome do modelo
      timestamps: false,    // Desabilita os campos createdAt, updatedAt
    }
  );
};
