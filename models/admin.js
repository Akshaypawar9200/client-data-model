"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Admin.hasMany(models.Employee, {
        foreignKey: "adminId",
        as: "employees",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Admin.hasMany(models.Plan, {
        foreignKey: "adminId",
        as: "plans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Admin.init(
    {
      adminName: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      mobile: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      nominee: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      adminId: {
        Type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Admin",
      underscored: true,
    }
  );
  return Admin;
};
