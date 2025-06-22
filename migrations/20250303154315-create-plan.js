"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("plans", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      plan_name: {
        type: Sequelize.STRING,
      },
      plan_type: {
        type: Sequelize.STRING,
      },
      plan_price: {
        type: Sequelize.STRING,
      },
      plan_details: {
        type: Sequelize.STRING,
      },
      admin_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "admins",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("plans");
  },
};
