"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  activities.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "id",
        },
      },
      frequency: { type: DataTypes.STRING, allowNull: false },
      duration_type: { type: DataTypes.ENUM("fixed", "max"), allowNull: false },
      duration_in_seconds: { type: DataTypes.INTEGER },
      description: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "activities",
    }
  );
  return activities;
};
