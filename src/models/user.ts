// src/models/user.ts
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { IUser } from '../interfaces/user';
import { PersonModel } from './person';

export class UserModel extends Model<IUser, Omit<IUser, 'id'>> implements IUser {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
  declare personId: string;
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
      personId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,    
      modelName: 'user',
      timestamps: false,
    }
  );
};

export const associate = () => {
  UserModel.hasOne(PersonModel, {
    foreignKey: "userId",
    as: "person",
  });
};
