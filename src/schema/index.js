const { gql } = require('apollo-server');


const typeDefs = gql`
  type Query {
    authors: [Author]!
  }

  type Mutation {
    newAuthor(name: String!): Author
    authorWonAward(name: String!): Boolean!
    authorWritesNewBook(authorName:String!, bookName: String! ): Book!
  }

  type Author {
    id: ID!
    name: String!
    hasWonAwards: Boolean!
  }

  type Book {
    id: ID!
    name: String!
    author: Author
  }
`;

module.exports = {
  typeDefs
};