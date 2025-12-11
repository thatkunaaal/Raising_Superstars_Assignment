'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_activity_progresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_program_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: "user_programs",
          key: "id"
        }
      },
      program_day_activity_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"program_day_activities",
          key:"id"
        }
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('user_activity_progresses');
  }
};