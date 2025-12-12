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
    await queryInterface.bulkInsert("Programs", [
      {
        name: "Prodigy Brain & Mobility",
        description:
          "Monthly program for new born baby to sharpen memory and mobility",
        duration_in_days: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Prodigy Brain & Skill Development Program",
        description:
          "21-days program for new born baby designed to enhance a child's cognitive abilities, creativity, motor skills, and early learning foundations",
        duration_in_days: 21,
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
    await queryInterface.bulkDelete("Programs", {
      name: {
        [Op.in]: [
          "Prodigy Brain & Mobility",
          "Prodigy Brain & Skill Development Program",
        ],
      },
    });
  },
};
