"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("agents", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      agent_name: {
        type: Sequelize.STRING,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.STRING,
      },
      nominee: {
        type: Sequelize.STRING,
      },
      document: {
        type: Sequelize.STRING,
      },
      document_type: {
        type: Sequelize.STRING,
      },
      assign_insurance_plan: {
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
      customer_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "customers",
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
    await queryInterface.dropTable("agents");
  },
};
