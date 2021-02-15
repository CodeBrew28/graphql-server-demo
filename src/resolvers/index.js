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
    },
    
}

module.exports = {
    resolvers
};