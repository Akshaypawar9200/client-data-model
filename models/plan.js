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
      Plan.belongsTo(models.User, {
        foreignKey: "assign_employee_id",
        as: "employeePlan",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      Plan.belongsTo(models.User, {
        foreignKey: "assign_agent_id",
        as: "agentPlan",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      Plan.belongsTo(models.User, {
        foreignKey: "created_by",
        as: "userPlan",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      Plan.belongsTo(models.User, {
        foreignKey: "assign_customer_id",
        as: "customerPlan",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    }
  }
  Plan.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
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
      customerId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      assignEmployeeId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      assignAgentId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      assignCustomerId: {
        type: DataTypes.UUID,
        allowNull: true,
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
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      updatedBy: {
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
