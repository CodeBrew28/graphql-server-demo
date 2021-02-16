const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    authors: [Author]!
    getBooks(authorName:String!): [Book]!
  }

  type Mutation {
    newAuthor(name: String!): Author
    authorWinsAward(name: String!): Boolean!
    newBook(authorName:String!, bookName: String! ): Book!
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