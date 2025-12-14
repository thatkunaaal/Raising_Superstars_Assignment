const { StatusCodes } = require("http-status-codes");
const { ActivityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const activityRepo = new ActivityRepository();

async function getAllActivities() {
  try {
    const Activities = await activityRepo.getAll();
    return Activities;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong while fetching Activities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAllActivities,
};
