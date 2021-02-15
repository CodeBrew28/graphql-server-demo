
const { DataSource } = require('apollo-datasource');

class AuthorAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  async findOrCreateAuthor({ name: nameArg } = {}) {
    const authors =  await this.store.authors.findOrCreate( {where: {name:nameArg}})
    return authors && authors[0] ? authors[0] : null;
  }

  async authorWonAward({ name: nameArg } = {}) {
    const succesfulUpdate = await this.store.authors.update( { hasWonAwards: true }, {where: {name:nameArg}})
    return succesfulUpdate == true
  }

  async getAllAuthors() {
    return await this.store.authors.findAll()
  }
}

module.exports = AuthorAPI;