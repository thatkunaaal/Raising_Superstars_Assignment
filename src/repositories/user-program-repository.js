const CrudRepository = require("./crud-repository");
const {
  user_program,
  user_activity_progress,
  program_day_activity,
  activities,
} = require("../models");
const { getDayNumber } = require("../utils/common");
const { Op } = require("sequelize");
const { sequelize } = require("../models");
const { QueryTypes } = require("sequelize");

class UserProgramRepository extends CrudRepository {
  constructor() {
    super(user_program);
  }

  async getUserActivities(user_id, data) {
    const currUserData = await user_program.findAll({
      where: {
        user_id: user_id,
        program_id: data.program_id,
      },
    });

    if (currUserData[0].dataValues.status === "completed") {
      return {
        status: currUserData[0].dataValues.status,
        message: "User have completed this program",
        data: [],
      };
    }

    const userProgramId = currUserData[0].dataValues.id;

    //calculate day number from start date
    const day_number = getDayNumber(currUserData[0].dataValues.start_date);

    const weekStart = Math.floor((day_number - 1) / 7) * 7 + 1;
    const weekEnd = weekStart + 6;

    const sqlQuery = `
        SELECT a.id,a.name,a.frequency , a.duration_type , a.duration_in_seconds , a.category_id 
        FROM program_day_activities pda  JOIN user_activity_progresses uap
        ON uap.program_day_activity_id = pda.id
        AND uap.user_program_id = ${userProgramId}
        Join activities a
        ON pda.activity_id = a.id
        WHERE pda.program_id = ${data.program_id}
        AND pda.day_number BETWEEN ${weekStart} AND ${weekEnd}
        Order by pda.order_in_day;
    `;

    const weeklyActivities = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return {
      status: currUserData[0].dataValues.status,
      message: "Successfully fetched all the activities list",
      data: weeklyActivities,
    };
  }

  async getUserCategory(user_id, data) {
    const response = await this.getUserActivities(user_id, data);

    if (response.status === "completed") {
      return response;
    }

    const weeklyUniqueCategoryId = new Set();

    for (const activity of response.data) {
      weeklyUniqueCategoryId.add(activity.category_id);
    }

    const categoryIdsArray = [...weeklyUniqueCategoryId];

    const sqlQuery = `
        SELECT *
        FROM categories
        WHERE id IN (:categoryIds)
    `;

    const categories = await sequelize.query(sqlQuery, {
      replacements: {
        categoryIds: categoryIdsArray,
      },
      type: sequelize.QueryTypes.SELECT,
    });

    return {
      status: response.status,
      message: "Successfully fetched all the categories list",
      data: categories,
    };
  }

  async getUserDayWiseActivityStatus(user_id, data) {
    const currUserData = await user_program.findAll({
      where: {
        user_id: user_id,
        program_id: data.program_id,
      },
    });

    if (currUserData[0].dataValues.status === "completed") {
      return {
        status: currUserData[0].dataValues.status,
        message: "User have completed this program",
        data: [],
      };
    }

    const userProgramId = currUserData[0].dataValues.id;

    //calculate day number from start date
    const day_number = getDayNumber(currUserData[0].dataValues.start_date);

    const weekStart = Math.floor((day_number - 1) / 7) * 7 + 1;
    const weekEnd = weekStart + 6;

    const sqlQuery = `
        SELECT pda.day_number,uap.is_completed
        FROM program_day_activities pda  JOIN user_activity_progresses uap
        ON uap.program_day_activity_id = pda.id
        AND uap.user_program_id = ${userProgramId}
        Join activities a
        ON pda.activity_id = a.id
        WHERE pda.program_id = ${data.program_id}
        AND pda.day_number BETWEEN ${weekStart} AND ${weekEnd}
        Order by pda.day_number;
    `;

    const dailyStatus = await sequelize.query(sqlQuery, {
      type: QueryTypes.SELECT,
    });

    return {
      status: currUserData[0].dataValues.status,
      message: "Successfully fetched all the activities list",
      data: dailyStatus,
    };
  }
}

module.exports = UserProgramRepository;
