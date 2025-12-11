const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

const info = (req, res) => {
  const err = new AppError("aerro test", StatusCodes.INTERNAL_SERVER_ERROR);
  console.log(err);

  return res.status(err.StatusCodes).json({
    success: false,
    message: "API is live",
    error: err,
    data: {},
  });
};

module.exports = info;
