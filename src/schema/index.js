const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    authors: [Author]!
  }

  type Mutation {
    newAuthor(name: String!): Author
    authorWinsAward(name: String!): Boolean!
  }

  type Author {
    id: ID!
    name: String!
    hasWonAwards: Boolean!
  }
`;

module.exports = {
  typeDefs
};