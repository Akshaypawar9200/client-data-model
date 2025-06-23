"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoices.belongsTo(models.User, {
        foreignKey: "customerId",
        as: "user",
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    }
  }
  Invoices.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      customerId: { type: DataTypes.UUID, allowNull: false },
      paymentMode: { type: DataTypes.STRING, allowNull: false },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      amount: { type: DataTypes.INTEGER, allowNull: false },

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
      modelName: "Invoices",
      underscored: true,
    }
  );
  return Invoices;
};
