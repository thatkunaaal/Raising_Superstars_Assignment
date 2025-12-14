const { StatusCodes } = require("http-status-codes");
const { ProgramDayActivityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const programDayActivityRepo = new ProgramDayActivityRepository();

async function getAllProgramDayActivity() {
  try {
    const programDayActivity = await programDayActivityRepo.getAll();
    return programDayActivity;
  } catch (error) {
    throw new AppError(
      "Something went wrong while fetching all program-day-activity",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAllProgramDayActivity,
};
