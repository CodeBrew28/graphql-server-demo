
const { DataSource } = require('apollo-datasource');

class AuthorAPI extends DataSource {
 
  constructor() {
    super();
    this.authors = [{name: "aria"}]
   
  };


  async findOrCreateAuthor({ name: nameArg } = {}) {
    return this.authors[0]
    // const authors =  await this.store.authors.findOrCreate( {where: {name:nameArg}})
    // return authors && authors[0] ? authors[0] : null;
  }

  async authorWonAward({ name: nameArg } = {}) {
    return true
    // const succesfulUpdate = await this.store.authors.update( { hasWonAwards: true }, {where: {name:nameArg}})
    // return succesfulUpdate == true
  }

  async getAllAuthors() {
    return this.authors
    // return await this.store.authors.findAll()
  }
}

module.exports = AuthorAPI;