const resolvers =  {
    Query: {
        authors: async (_,  {}, { dataSources }) => {
            return dataSources.authorAPI.getAllAuthors()
        },
    },
    Mutation: {

    },
    
}



module.exports = {
    resolvers
};