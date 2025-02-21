"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Agent.init(
    {
      agentName: {
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
      document: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      documentType: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
      assignInsurancePlan: {
        Type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Agent",
      underscored: true,
    }
  );
  return Agent;
};
