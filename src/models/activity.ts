// src/models/activity.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { IActivity } from "../interfaces";
import { PersonModel } from "./person";

export class ActivityModel extends Model<IActivity,  Omit<IActivity, 'id' | 'createdAt' | 'updatedAt'>> implements IActivity {
  declare id: string;
  declare name: string;
  declare description: string;
  declare startDate: Date;
  declare endDate: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
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
  },
  {
    sequelize,
    modelName: "activity",
    timestamps: true,
  }

)};

export const associate = () => {
  ActivityModel.belongsToMany(PersonModel, {
    through: "PersonActivity",
    as: "people",
    foreignKey: "activityId",
  });
};
