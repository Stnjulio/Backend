// src/models/address.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { IAddress,  } from "../interfaces";
import { PersonModel } from "./person";

export class AddressModel extends Model<IAddress, IAddress> implements IAddress {
   declare id: number;
   declare cep: string;
   declare logradouro: string;
   declare complemento: string;
   declare bairro: string;
   declare localidade: string;
   declare uf: string;
}

export const init = async (sequelize: Sequelize) => {
    AddressModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        localidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uf: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        },
    

  {
    sequelize,
    modelName: "Adress",
    timestamps: false,
  }

)};

export const associate = () => {
    AddressModel.belongsToMany(PersonModel, {
      through: "PersonAddress",
      as: "people",
      foreignKey: "addressId",
    });
  };
