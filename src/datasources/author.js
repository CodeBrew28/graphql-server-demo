
const { DataSource } = require('apollo-datasource');

class AuthorAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async getAllAuthors() {
    return await this.store.authors.findAll()
  }
}

module.exports = AuthorAPI;