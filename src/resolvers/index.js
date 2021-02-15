const resolvers =  {
    Query: {
        authors: async (_,  {}, { dataSources }) => {
            return dataSources.authorAPI.getAllAuthors()
        },
    },
    Mutation: {
        newAuthor: async (_, {name }, { dataSources }) => {
        return dataSources.authorAPI.findOrCreateAuthor({name})
      },
      authorWonAward: async (_, {name }, { dataSources }) => {
        return await dataSources.authorAPI.authorWonAward({name})
      },
      authorWritesNewBook: async (_, {authorName, bookName }, { dataSources }) => {
        return await dataSources.bookAPI.bookWritten({authorName,bookName })
      }
    },
    Book: {
        author: async (book, __, { dataSources }) => {
            return await dataSources.authorAPI.findOrCreateAuthor({name: book.authorName})
        },
    },
}



module.exports = {
    resolvers
  };