const { DataSource } = require('apollo-datasource');

class BookAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async newBook({  bookName: bookBame, authorName: authorName } = {}) {
    const books =  await this.store.books.findOrCreate(
      {where: {authorName:authorName, name: bookBame}}
    )
    return books && books[0] ? books[0] : null;
  }
}

module.exports = BookAPI;