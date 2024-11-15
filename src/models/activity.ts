// src/models/activity.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/db";
import { IActivityAttributes } from "../interfaces";



export class ActivityModel extends Model<IActivityAttributes, IActivityAttributes> implements IActivityAttributes {
  declare id: number;
  declare name: string;
  declare description: string;
  declare startDate: Date;
  declare endDate: Date;
  declare createdAt: Date;
}
export const init = async (sequelize: Sequelize) => {
ActivityModel.init(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "activity",
    timestamps: false,
  }

)};

// Associar o modelo User com outros modelos, se necessário
export const associate = () => {
  // Exemplo de associação: 
  // UserModel.hasMany(OtherModel, { foreignKey: 'userId' });
};

