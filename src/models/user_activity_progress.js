"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_activity_progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_activity_progress.init(
    {
      user_program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user_programs",
          key: "id",
        },
      },
      program_day_activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "program_day_activities",
          key: "id",
        },
      },
      is_completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "user_activity_progress",
    }
  );
  return user_activity_progress;
};
