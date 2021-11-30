const { gql } = require('apollo-server-express');

// required typedef, book input, mutations:login, adduser, savebook, removebook, models
// authors array, books array
const typeDefs = gql`
type Query{
    me: User
}
input bookInfo {
    author: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInfo): User
    removeBook(bookId: String!): User
}
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs