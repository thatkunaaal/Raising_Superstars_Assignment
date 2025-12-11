'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('program_day_activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      program_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "programs",
          key: "id"
        }
      },
      day_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      activity_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "activities",
          key: "id"
        }
      },
      order_in_day: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('program_day_activities');
  }
};