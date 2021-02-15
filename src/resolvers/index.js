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
    },
    
}

module.exports = {
    resolvers
};