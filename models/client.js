"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
.     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Plan, {
        foreignKey: "assign_employee_id",
        as: "plans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasMany(models.Plan, {
        foreignKey: "assign_agent_id",
        as: "plans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasMany(models.Plan, {
        foreignKey: "created_by",
        as: "plans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      User.hasMany(models.Plan, {
        foreignKey: "assign_customer_id",
        as: "plans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      User.hasMany(models.Feedback, {
        foreignKey: "createdBy",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        as: "feedbacks",
      });

      User.hasMany(models.Invoices, {
        foreignKey: "customerId",
        as: "invoices",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      // define association here
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
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
      modelName: "client",
      underscored: true,
    }
  );
  return User;
};
