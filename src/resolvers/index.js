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
        authorWinsAward: async (_, {name }, { dataSources }) => {
            return await dataSources.authorAPI.authorWonAward({name})
        },
        newBook: async (_, { bookName, authorName }, { dataSources }) => {
            return await dataSources.bookAPI.newBook({bookName, authorName })
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