const { DataSource } = require('apollo-datasource');

class BookAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.context = config.context;
  }

  async newBook({  bookName: bookBame, authorName: authorName } = {}) {
    // const books =  await this.store.books.findOrCreate(
    //   {where: {authorName:authorName, name: bookBame}}
    // )
    return null;
  }
}

module.exports = BookAPI;