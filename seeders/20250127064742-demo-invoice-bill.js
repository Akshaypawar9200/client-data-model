"use strict";
const sampleInvoices = require("../sample-data/invoices.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    try {
      await queryInterface.bulkInsert("Invoices", sampleInvoices, {});
    } catch (error) {
      console.error(error);
    }
  },

  async down(queryInterface, Sequelize) {},
};
