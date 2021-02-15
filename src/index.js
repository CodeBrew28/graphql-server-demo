const { ApolloServer } = require('apollo-server');
const { createStore } = require('./utils');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');

const store = createStore();

const dataSources = () => ({
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
  store,
  server,
};
