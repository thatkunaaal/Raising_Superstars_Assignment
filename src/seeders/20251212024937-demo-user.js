"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        name: "Kishan Singh",
        email: "thatkunaal@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John Deo",
        email: "johnDeo@ggmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", {
      email: {
        [Op.in]: ["thatkunaal@gmail.com", "johnDeo@gmail.com"],
      },
    });
  },
};
