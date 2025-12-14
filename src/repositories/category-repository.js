const CrudRepository = require("./crud-repository");
const { Categories } = require("../models");

class CategoryRepository extends CrudRepository {
  constructor() {
    super(Categories);
  }

  
}

module.exports = CategoryRepository;
