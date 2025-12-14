const { StatusCodes } = require("http-status-codes");
const { CategoryService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function getAllCategories(req, res) {
  try {
    const categories = await CategoryService.getAllCategories();

    SuccessResponse.data = categories;

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.StatusCodes).json(ErrorResponse);
  }
}

module.exports = {
  getAllCategories,
};
