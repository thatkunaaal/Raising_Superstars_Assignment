"use strict";

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
    await queryInterface.bulkInsert("Categories", [
      {
        title: "Mobility",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Memory",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Creativity",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Languages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Athleticism",
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
    await queryInterface.bulkDelete("Categories", {
      title: {
        [Op.in]: [
          "Mobility",
          "Music",
          "Memory",
          "Creativity",
          "Languages",
          "Athleticism",
        ],
      },
    });
  },
};
