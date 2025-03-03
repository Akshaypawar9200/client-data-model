"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomerInsuranceData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CustomerInsuranceData.init(
    {
      planName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      purchaseDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentMode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      planExpiryDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CustomerInsuranceData",
      underscored: true,
    }
  );
  return CustomerInsuranceData;
};
