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

      created_by: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.UUID,
      },

      assign_customer_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      assign_employee_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
      assign_agent_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: "users",
          key: "id",
        },
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
