"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CustomerInsuranceDatas", {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      plan_name: {
        type: Sequelize.STRING,
      },
      purchase_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      payment_mode: {
        type: Sequelize.STRING,
      },
      plan_expiry_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      created_At: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_At: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CustomerInsuranceDatas");
  },
};
