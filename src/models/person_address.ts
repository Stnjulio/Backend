import { DataTypes, Model, Sequelize } from "sequelize";

export class PersonAddressModel extends Model {}

export const init = async (sequelize: Sequelize) => {
  PersonAddressModel.init(
    {
      personId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Person",
          key: "id",
        },
      },
      addressId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "PersonAddress",
      timestamps: false,
    }
  );
};
