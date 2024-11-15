// src/models/user.ts
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { IUser } from '../interfaces/user';

export default class UserModel extends Model<IUser, Optional<IUser, 'id'>> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  static associate: any;
}

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
      sequelize,    
      modelName: 'user',
      timestamps: false,
    }
  );
};

export const associate = () => {};