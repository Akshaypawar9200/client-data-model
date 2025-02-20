"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoice.belongsTo(models.client, {
        foreignKey: "client_id",
        as: "clientId",
      });
      // define association here
    }
  }
  Invoice.init(
    {
      companyName: DataTypes.STRING,
      customerName: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Invoice",
      underscored: true,
    }
  );
  return Invoice;
};
