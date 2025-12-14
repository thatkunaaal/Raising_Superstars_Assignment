const CrudRepository = require("./crud-repository");
const {program_day_activity} = require("../models");

class ProgramDayActivity extends CrudRepository{
    constructor(){
        super(program_day_activity);
    }

}

module.exports = ProgramDayActivity;