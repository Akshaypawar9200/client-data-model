"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employees", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      employee_name: {
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
      admin_id: {
        type: Sequelize.UUID,

        references: {
          model: "admins",
          key: "id",
        },
      },
      document: {
        type: Sequelize.STRING,
      },
      document_type: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("employees");
  },
};

// emp: 20250221041023;
// admin: 20250221044840;
