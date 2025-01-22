"use strict";
const sampleUsers = require("../sample-data/users.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _) {
    try {
      await queryInterface.bulkInsert("clients", sampleUsers, {});
    } catch (error) {
      console.error(error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      const userIdsToDelete = sampleUsers.map((user) => user.id);

      await queryInterface.bulkDelete(
        "clients",
        {
          id: {
            [Sequelize.Op.in]: Object.values(userIdsToDelete),
          },
        },
        {}
      );
    } catch (error) {
      console.error(error);
    }
  },
};
