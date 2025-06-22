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
      Plan.belongsTo(models.Admin, {
        foreignKey: "adminId",
        as: "admin",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Plan.belongsTo(models.Employee, {
        foreignKey: "employeeId",
        as: "employee",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
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
      adminId: {
        Type: DataTypes.UUID,
      },
      employeeId: {
        Type: DataTypes.UUID,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
