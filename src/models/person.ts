// src/models/user.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { IAddress, IPerson } from "../interfaces";

export class PersonModel extends Model<IPerson, IPerson> implements IPerson {
    declare nome: string;
    declare telefone: string;
    declare email: string;
    declare endereco: IAddress;
}

export const init = async (sequelize: Sequelize) => {
PersonModel.init(
  {
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
  },
  {
    sequelize,
    modelName: "Person",
    timestamps: false,
  }

)};

export const associate = () => {};