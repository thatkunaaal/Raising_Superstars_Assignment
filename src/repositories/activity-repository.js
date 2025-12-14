const CrudRepository = require("./crud-repository");
const { activities } = require("../models");

class ActivityRepository extends CrudRepository {
  constructor() {
    super(activities);
  }
}

module.exports = ActivityRepository;
