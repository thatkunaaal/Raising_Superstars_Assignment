const express = require("express");
const { UserProgramController } = require("../../controllers");
const router = express.Router();

router.get("/:id", UserProgramController.getUserActivities);
router.get("/", UserProgramController.getAllUserProgram);

module.exports = router;
