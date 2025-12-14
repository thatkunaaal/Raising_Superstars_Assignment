class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }
}

module.exports = CrudRepository;
