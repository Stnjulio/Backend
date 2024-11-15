// src/models/user.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/db";
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

// Associar o modelo User com outros modelos, se necessário
export const associate = () => {
  // Exemplo de associação: 
  // UserModel.hasMany(OtherModel, { foreignKey: 'userId' });
};

