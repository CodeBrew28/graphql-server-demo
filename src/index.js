const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');
const AuthorAPI = require('./datasources/author');
const BookAPI = require('./datasources/book');



const dataSources = () => ({
  authorAPI: new AuthorAPI(),
  bookAPI: new BookAPI(),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
});


// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });


if (process.env.NODE_ENV !== 'test') {
 
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    // console.log(`
    //   Server is running!
    //   Listening on port 4000
    //   Query at https://studio.apollographql.com/dev
    // `);
    console.log(`🚀 Server ready at ${url}`);
  });
}

module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  AuthorAPI,
  BookAPI,
  server,
};
