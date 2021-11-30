import gql from "graphql-tag";

export const GET_ME = gql `{
    me {
        _id
        bookcount
        username
        email
        savedBooks { 
            bookId
            authors
            image
            link
            title
            description
            
        }
    }

}`;