const express = require("express");
const { ProgramDayActivityController } = require("../../controllers");
const router = express.Router();

router.get("/",ProgramDayActivityController.getAllProgramDayActivity);


module.exports = router;