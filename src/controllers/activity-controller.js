const { StatusCodes } = require("http-status-codes");
const { ActivityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function getAllActivities(req, res) {
  try {
    const activity = await ActivityService.getAllActivities();
    console.log(activity);
    SuccessResponse.data = activity;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  getAllActivities,
};
