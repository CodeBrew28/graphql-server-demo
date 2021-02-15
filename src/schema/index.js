const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    authors: [Author]!
  }

  type Mutation {
    newAuthor(name: String!): Author
  }

  type Author {
    id: ID!
    name: String!
  }
`;

module.exports = {
  typeDefs
};