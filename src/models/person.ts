// src/models/user.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { IAddress, IPerson } from "../interfaces";
import { ActivityModel } from "./activity";
import { AddressModel } from "./address";
import { UserModel } from "./user";

export class PersonModel extends Model<IPerson, Omit<IPerson, 'id'>> implements IPerson {
    declare id: string;
    declare nome: string;
    declare telefone: string;
    declare email: string;
    declare endereco: IAddress;
    declare userId: number;
}

export const init = async (sequelize: Sequelize) => {
PersonModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Person",
    timestamps: false,
  }

)};

export const associate = () => {
  // N:N com ActivityModel
  PersonModel.belongsToMany(ActivityModel, {
    through: "PersonActivity",
    as: "activities",
    foreignKey: "personId",
  });

  // N:N com AddressModel
  PersonModel.belongsToMany(AddressModel, {
    through: "PersonAddress",
    as: "addresses",
    foreignKey: "personId",
  });

  // 1:1 com UserModel
  PersonModel.belongsTo(UserModel, {
    foreignKey: "userId",
    as: "user",
  });
};
