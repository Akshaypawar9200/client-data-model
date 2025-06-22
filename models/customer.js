"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Customer.belongsTo(models.Employee, {
        foreignKey: "employeeId",
        as: "employee",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Customer.belongsTo(models.Agent, {
        foreignKey: "agentId",
        as: "agent",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Customer.belongsTo(models.Plan, {
        foreignKey: "planId",
        as: "plan",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Customer.init(
    {
      customerName: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      userName: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      pincode: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      mobile: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      nominee: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      document: {
        allowNull: false,
        Type: DataTypes.STRING,
      },
      documentType: {
        allowNull: false,
        Type: DataTypes.STRING,
      },

      employeeId: {
        allowNull: true,
        Type: DataTypes.UUID,
      },
      agentId: {
        allowNull: true,
        Type: DataTypes.UUID,
      },
      planId: {
        allowNull: true,
        Type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Customer",
      underscored: true,
    }
  );
  return Customer;
};
