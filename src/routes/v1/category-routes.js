const express = require("express");
const router = express.Router();
const { UserProgramController } = require("../../controllers");

router.get("/:id", UserProgramController.getUserCategory);

module.exports = router;
