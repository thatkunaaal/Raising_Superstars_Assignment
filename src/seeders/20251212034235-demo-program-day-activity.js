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

    // common timestamp for seeded rows (UTC)
    const ts = new Date("2025-12-12T03:40:00Z");

    // ---- program 4 (21-day program) mappings for days 14..21 ----
    // Day 14
    rows.push(
      { program_id: 4, day_number: 14, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 14, activity_id: 2, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 14, activity_id: 3, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 14, activity_id: 4, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // Day 15
    rows.push(
      { program_id: 4, day_number: 15, activity_id: 2, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 15, activity_id: 3, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 15, activity_id: 5, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 15, activity_id: 6, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // Day 16
    rows.push(
      { program_id: 4, day_number: 16, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 16, activity_id: 4, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 16, activity_id: 7, order_in_day: 3, createdAt: ts, updatedAt: ts }
    );

    // Day 17
    rows.push(
      { program_id: 4, day_number: 17, activity_id: 2, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 17, activity_id: 3, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 17, activity_id: 6, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 17, activity_id: 8, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // Day 18
    rows.push(
      { program_id: 4, day_number: 18, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 18, activity_id: 5, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 18, activity_id: 9, order_in_day: 3, createdAt: ts, updatedAt: ts }
    );

    // Day 19
    rows.push(
      { program_id: 4, day_number: 19, activity_id: 2, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 19, activity_id: 3, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 19, activity_id: 4, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 19, activity_id: 7, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // Day 20
    rows.push(
      { program_id: 4, day_number: 20, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 20, activity_id: 6, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 20, activity_id: 8, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 20, activity_id: 9, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // Day 21
    rows.push(
      { program_id: 4, day_number: 21, activity_id: 2, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 21, activity_id: 5, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 21, activity_id: 3, order_in_day: 3, createdAt: ts, updatedAt: ts },
      { program_id: 4, day_number: 21, activity_id: 9, order_in_day: 4, createdAt: ts, updatedAt: ts }
    );

    // ---- program 3 (30-day program) demo mapping for days 14..21 (slightly different) ----
    // Day 14
    rows.push(
      { program_id: 3, day_number: 14, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 14, activity_id: 7, order_in_day: 2, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 14, activity_id: 2, order_in_day: 3, createdAt: ts, updatedAt: ts }
    );

    // Day 15
    rows.push(
      { program_id: 3, day_number: 15, activity_id: 3, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 15, activity_id: 4, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 16
    rows.push(
      { program_id: 3, day_number: 16, activity_id: 2, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 16, activity_id: 8, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 17
    rows.push(
      { program_id: 3, day_number: 17, activity_id: 5, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 17, activity_id: 9, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 18
    rows.push(
      { program_id: 3, day_number: 18, activity_id: 1, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 18, activity_id: 3, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 19
    rows.push(
      { program_id: 3, day_number: 19, activity_id: 4, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 19, activity_id: 2, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 20
    rows.push(
      { program_id: 3, day_number: 20, activity_id: 7, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 20, activity_id: 8, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // Day 21
    rows.push(
      { program_id: 3, day_number: 21, activity_id: 9, order_in_day: 1, createdAt: ts, updatedAt: ts },
      { program_id: 3, day_number: 21, activity_id: 2, order_in_day: 2, createdAt: ts, updatedAt: ts }
    );

    // perform bulk insert
    await queryInterface.bulkInsert("program_day_activities", rows, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const deletes = [
      // program 4 rows (some examples; include all inserted combos)
      { program_id: 4, day_number: 14, activity_id: 1 },
      { program_id: 4, day_number: 14, activity_id: 2 },
      { program_id: 4, day_number: 14, activity_id: 3 },
      { program_id: 4, day_number: 14, activity_id: 4 },

      { program_id: 4, day_number: 15, activity_id: 2 },
      { program_id: 4, day_number: 15, activity_id: 3 },
      { program_id: 4, day_number: 15, activity_id: 5 },
      { program_id: 4, day_number: 15, activity_id: 6 },

      { program_id: 4, day_number: 16, activity_id: 1 },
      { program_id: 4, day_number: 16, activity_id: 4 },
      { program_id: 4, day_number: 16, activity_id: 7 },

      { program_id: 4, day_number: 17, activity_id: 2 },
      { program_id: 4, day_number: 17, activity_id: 3 },
      { program_id: 4, day_number: 17, activity_id: 6 },
      { program_id: 4, day_number: 17, activity_id: 8 },

      { program_id: 4, day_number: 18, activity_id: 1 },
      { program_id: 4, day_number: 18, activity_id: 5 },
      { program_id: 4, day_number: 18, activity_id: 9 },

      { program_id: 4, day_number: 19, activity_id: 2 },
      { program_id: 4, day_number: 19, activity_id: 3 },
      { program_id: 4, day_number: 19, activity_id: 4 },
      { program_id: 4, day_number: 19, activity_id: 7 },

      { program_id: 4, day_number: 20, activity_id: 1 },
      { program_id: 4, day_number: 20, activity_id: 6 },
      { program_id: 4, day_number: 20, activity_id: 8 },
      { program_id: 4, day_number: 20, activity_id: 9 },

      { program_id: 4, day_number: 21, activity_id: 2 },
      { program_id: 4, day_number: 21, activity_id: 5 },
      { program_id: 4, day_number: 21, activity_id: 3 },
      { program_id: 4, day_number: 21, activity_id: 9 },

      // program 3 rows
      { program_id: 3, day_number: 14, activity_id: 1 },
      { program_id: 3, day_number: 14, activity_id: 7 },
      { program_id: 3, day_number: 14, activity_id: 2 },

      { program_id: 3, day_number: 15, activity_id: 3 },
      { program_id: 3, day_number: 15, activity_id: 4 },

      { program_id: 3, day_number: 16, activity_id: 2 },
      { program_id: 3, day_number: 16, activity_id: 8 },

      { program_id: 3, day_number: 17, activity_id: 5 },
      { program_id: 3, day_number: 17, activity_id: 9 },

      { program_id: 3, day_number: 18, activity_id: 1 },
      { program_id: 3, day_number: 18, activity_id: 3 },

      { program_id: 3, day_number: 19, activity_id: 4 },
      { program_id: 3, day_number: 19, activity_id: 2 },

      { program_id: 3, day_number: 20, activity_id: 7 },
      { program_id: 3, day_number: 20, activity_id: 8 },

      { program_id: 3, day_number: 21, activity_id: 9 },
      { program_id: 3, day_number: 21, activity_id: 2 },
    ];

    // use Op.or to delete only exact inserted rows
    await queryInterface.bulkDelete("program_day_activities", { [Op.or]: deletes }, {});
  }
};
