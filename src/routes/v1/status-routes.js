const express = require("express");
const { UserProgramController } = require("../../controllers");
const router = express.Router();

router.get("/:id", UserProgramController.getUserDayWiseActivityStatus);

module.exports = router;
