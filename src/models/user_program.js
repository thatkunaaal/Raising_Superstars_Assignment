"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_program.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        allowNull: false,
      },
      program_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "programs",
          key: "id",
        },
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "inactive", "completed"),
        defaultValue: "inactive",
      },
      start_date: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "user_program",
    }
  );
  return user_program;
};
