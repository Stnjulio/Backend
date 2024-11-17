import { DataTypes, Model, Sequelize } from "sequelize";

export class PersonActivityModel extends Model {}

export const init = async (sequelize: Sequelize) => {
  PersonActivityModel.init(
    {
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
