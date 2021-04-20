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
});

if (process.env.NODE_ENV !== 'test') {
  server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Query at https://studio.apollographql.com/dev
    `);
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
