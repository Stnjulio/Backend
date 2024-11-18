import { DataTypes, Model, Sequelize } from "sequelize";
import { IPersonActivity } from "../interfaces/person_activity";

export class PersonActivityModel extends Model <IPersonActivity, Omit<IPersonActivity, "id">> implements IPersonActivity{
  declare id: string;
  declare personId: string;
  declare activityId: string;
}

export const init = async (sequelize: Sequelize) => {
  PersonActivityModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },
      personId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Person",
          key: "id",
        },
      },
      activityId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Activity",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "PersonActivity",
      timestamps: false,
    }
  );
};
