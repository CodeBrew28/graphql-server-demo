
const { DataSource } = require('apollo-datasource');

class AuthorAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findOrCreateAuthor({ name: nameArg } = {}) {
    console.log("NBAMME")
    console.log(nameArg)
    const authors =  await this.store.authors.findOrCreate(
    // {
      // {defaults: {hasWonAwards:false}},
      {where: {name:nameArg}}
 
    // },
    )
    // await this.store.authors.update( { hasWonAwards: false }, {where: {name:nameArg}})
    // const authors = await this.store.authors.findOrCreate({where: {name:nameArg}})
    
    return authors && authors[0] ? authors[0] : null;
  }

  async getAllAuthors() {
    const authors = await this.store.authors.findAll()
    return authors
  }

  async authorWonAward({ name: nameArg } = {}) {
    const succesfulUpdate = await this.store.authors.update( { hasWonAwards: true }, {where: {name:nameArg}})
    // console.log(success)
    // console.log(success == true)
    // const author = await this.store.authors.findOrCreate({where: {name:nameArg}})
    // console.log(author)
    // console.log("HERE2")
    // console.log(author.hasWonAwards)
    // if (author && author.hasWonAwards) {
    //   console.log("TRUE")
    //   return true
    // }
    // console.log("FALSE")
    return succesfulUpdate == true
  }

}

module.exports = AuthorAPI;