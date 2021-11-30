const { gql } = require('apollo-server-express');

// required typedef, book input, mutations:login, adduser, savebook, removebook, models
// authors array, books array
const typeDefs = gql`
type Query{
    me: USer
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