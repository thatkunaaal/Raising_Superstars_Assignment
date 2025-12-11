"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class program_day_activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  program_day_activity.init(
    {
      program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "programs",
          key: "id",
        },
      },
      day_number: { type: DataTypes.INTEGER, allowNull: false },
      activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "activities",
          key: "id",
        },
      },
      order_in_day: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "program_day_activity",
    }
  );
  return program_day_activity;
};
