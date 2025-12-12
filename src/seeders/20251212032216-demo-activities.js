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
    await queryInterface.bulkInsert("activities", [
      {
        name: "Advanced Mobility Exercises",
        category_id: 1,
        frequency: "Maximize",
        duration_type: "max",
        duration_in_seconds: null,
        description:
          "Mobility enhancement activity as shown in the Day-wise plan.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Knowledge Boosters (Follow daily plans)",
        category_id: 2,
        frequency: "2x/Day",
        duration_type: "fixed",
        duration_in_seconds: 30,
        description:
          "Knowledge-building boosters for daily cognitive practice.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Visual Solfege",
        category_id: 3,
        frequency: "1x/Day",
        duration_type: "fixed",
        duration_in_seconds: 30,
        description: "Visual music skill activity as shown in the PDF table.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Auditory Memory (Song 2)",
        category_id: 3,
        frequency: "1x/Day",
        duration_type: "fixed",
        duration_in_seconds: 30,
        description: "Auditory memory development activity (Song 2).",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Auditory Magic (Set 2)",
        category_id: 3,
        frequency: "2 sounds/Day",
        duration_type: "fixed",
        duration_in_seconds: 60,
        description: "Sound recognition and auditory processing activity.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Talk To Listen",
        category_id: 4,
        frequency: "1x/Day",
        duration_type: "fixed",
        duration_in_seconds: 30,
        description: "Communication and listening development activity.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Finger Skills",
        category_id: 1,
        frequency: "3x/Week",
        duration_type: "fixed",
        duration_in_seconds: 60,
        description: "Fine motor skills strengthening exercise.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stimulus Explosion",
        category_id: 2,
        frequency: "2x/Week",
        duration_type: "fixed",
        duration_in_seconds: 60,
        description: "High-engagement sensory stimulation activity.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Foundations of Logic (Quantify)",
        category_id: 2,
        frequency: "2x/Week",
        duration_type: "fixed",
        duration_in_seconds: 60,
        description: "Logic and quantification early-learning activity.",
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
    await queryInterface.bulkDelete("activities", {
      name: [
        "Advanced Mobility Exercises",
        "Knowledge Boosters (Follow daily plans)",
        "Visual Solfege",
        "Auditory Memory (Song 2)",
        "Auditory Magic (Set 2)",
        "Talk To Listen",
        "Finger Skills",
        "Stimulus Explosion",
        "Foundations of Logic (Quantify)",
      ],
    });
  },
};
