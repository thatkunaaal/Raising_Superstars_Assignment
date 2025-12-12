'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const rows = [];
    const ts = new Date("2025-12-12T03:55:00Z");
    // program 4 mappings (program_day_activity ids 1..30) => user_program_id = 2
    for (let pdaId = 1; pdaId <= 30; pdaId++) {
      rows.push({
        user_program_id: 2,
        program_day_activity_id: pdaId,
        is_completed: pdaId % 2 === 1, // demo: odd ids = completed
        createdAt: ts,
        updatedAt: ts,
      });
    }

    // program 3 mappings (program_day_activity ids 31..47) => user_program_id = 1
    for (let pdaId = 31; pdaId <= 47; pdaId++) {
      rows.push({
        user_program_id: 1,
        program_day_activity_id: pdaId,
        is_completed: pdaId % 2 === 1, // demo: odd ids = completed
        createdAt: ts,
        updatedAt: ts,
      });
    }

    await queryInterface.bulkInsert("user_activity_progresses", rows, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const Op = Sequelize.Op;
    const deletes = [];

    // program 4 rows (user_program_id = 2) pda 1..30
    for (let pdaId = 1; pdaId <= 30; pdaId++) {
      deletes.push({ user_program_id: 2, program_day_activity_id: pdaId });
    }

    // program 3 rows (user_program_id = 1) pda 31..47
    for (let pdaId = 31; pdaId <= 47; pdaId++) {
      deletes.push({ user_program_id: 1, program_day_activity_id: pdaId });
    }

    await queryInterface.bulkDelete("user_activity_progresses", { [Op.or]: deletes }, {});
  }
};
