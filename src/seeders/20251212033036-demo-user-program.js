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
    await queryInterface.bulkInsert("user_programs", [
      {
        user_id: 3,
        program_id: 3,
        status: "active",
        start_date: new Date("28-Nov-2025"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        program_id: 4,
        status: "completed",
        start_date: new Date("21-Jan-2025"),
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
    await queryInterface.bulkDelete("user_programs", {
      [Op.or]: [
        { user_id: 3, program_id: 3 },
        { user_id: 4, program_id: 4 },
      ],
    });
  },
};
