const { gql } = require('apollo-server-express');
const typeDefs = gql`

  type Query {
    me: User
  }
  type User {
      _id: ID
      username: String
      email: String
      bookCount: Int
      savedBooks: [Book]
  }

  type Mutation {
      login(email: String!, password: String!): User
      addUser(username: String!, email: String!, password: String!): User
      saveBook(input: savedBook!): User
      removeBook(bookID: String!): User
  }

  input savedBook {
      description: String
      title: String
      bookID: String
      image: String
      link: String
      authors: [String]
  }

  type Book {
      bookID: ID
      authors: [String]
      description: String
      title: String
      image: String
      link: String
  }

  type Auth {
      tokenL ID!
      user: User
  }
`;

module.exports = typeDefs;