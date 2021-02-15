const resolvers =  {
    Query: {
        authors: async (_,  {}, { dataSources }) => {
            return dataSources.authorAPI.getAllAuthors()
        }
    }
}



module.exports = {
    resolvers
};