const { StatusCodes } = require("http-status-codes");
const { CategoryRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const categoryRepo = new CategoryRepository();

async function getAllCategories() {
  try {
    const category = await categoryRepo.getAll();
    return category;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Something went wrong while fetching category",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getAllCategories,
};
