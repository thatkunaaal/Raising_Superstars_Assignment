const { StatusCodes } = require("http-status-codes");
const { ProgramDayActivityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function getAllProgramDayActivity(req, res) {
  try {
    const programDayActivity =
      await ProgramDayActivityService.getAllProgramDayActivity();

    SuccessResponse.data = programDayActivity;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  getAllProgramDayActivity,
};
