"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      customer_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pincode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mobile: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nominee: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      document: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      document_type: {
        type: Sequelize.STRING,
      },
      employee_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "employees",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      plan_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "plans",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("customers");
  },
};
