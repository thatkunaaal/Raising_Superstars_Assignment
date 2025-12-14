const { StatusCodes } = require("http-status-codes");
const { UserProgramRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const userProgramRepo = new UserProgramRepository();

async function getAllUserProgram() {
  try {
    const userProgram = await userProgramRepo.getAll();
    return userProgram;
  } catch (error) {
    throw new AppError(
      "Something went wrrong while fetching all user-programs",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUserActivities(user_id, data) {
  try {
    const UserActivities = await userProgramRepo.getUserActivities(
      user_id,
      data
    );
    return UserActivities;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong while fetching UserActivities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUserCategory(user_id, data) {
  try {
    const UserCategories = await userProgramRepo.getUserCategory(user_id, data);
    return UserCategories;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong while fetching User categories",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUserDayWiseActivityStatus(user_id, data) {
  try {
    const UserDailyStatus = await userProgramRepo.getUserDayWiseActivityStatus(
      user_id,
      data
    );
    return UserDailyStatus;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong while fetching User categories",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAllUserProgram,
  getUserActivities,
  getUserCategory,
  getUserDayWiseActivityStatus,
};
