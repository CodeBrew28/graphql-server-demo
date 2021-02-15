const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    authors: [Author]!
  }

  type Author {
    id: ID!
    name: String!
  }
`;

module.exports = {
  typeDefs
};