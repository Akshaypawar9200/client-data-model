"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plan.init(
    {
      planName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planDetails: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Plan",
      underscored: true,
    }
  );
  return Plan;
};
