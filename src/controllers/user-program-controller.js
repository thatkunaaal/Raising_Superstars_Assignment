const { StatusCodes } = require("http-status-codes");
const { UserProgramService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function getAllUserProgram(req, res) {
  try {
    const userProgram = await UserProgramService.getAllUserProgram();

    SuccessResponse.data = userProgram;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getUserActivities(req, res) {
  try {
    const user_id = req.params.id;
    const program_id = req.body.program_id;

    const UserActivities = await UserProgramService.getUserActivities(user_id, {
      program_id: program_id,
    });

    SuccessResponse.data = UserActivities;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getUserCategory(req, res) {
  try {
    const user_id = req.params.id;
    const program_id = req.body.program_id;
    const userWeeklyCategory = await UserProgramService.getUserCategory(
      user_id,
      {
        program_id: program_id,
      }
    );

    SuccessResponse.data = userWeeklyCategory;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

async function getUserDayWiseActivityStatus(req, res) {
  try {
    const user_id = req.params.id;
    const program_id = req.body.program_id;
    const userWeeklyCategory =
      await UserProgramService.getUserDayWiseActivityStatus(user_id, {
        program_id: program_id,
      });

    SuccessResponse.data = userWeeklyCategory;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  getAllUserProgram,
  getUserActivities,
  getUserCategory,
  getUserDayWiseActivityStatus,
};
