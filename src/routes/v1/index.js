const express = require("express");
const { infoController } = require("../../controllers");
const router = express.Router();
const CategoryRoutes = require("./category-routes");
const ActivityRoutes = require("./activity-routes");
const ProgramDayActivityRoutes = require("./program-day-activity-routes");
const UserProgramRoutes = require("./user-program-routes");
const StatusRoutes = require("./status-routes");

router.use("/categories", CategoryRoutes);
router.use("/activities", ActivityRoutes);
router.use("/status", StatusRoutes);
router.use("/programdayactivities", ProgramDayActivityRoutes);
router.use("/userprograms", UserProgramRoutes);

router.get("/info", infoController);

module.exports = router;
