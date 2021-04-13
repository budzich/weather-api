const {gql} = require('apollo-server');

module.exports = gql`
    scalar DateTime

    type Favorite {
        id: ID!
        title: String
        info: String!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    extend type Query {
        getFavorites: [Favorite!]
    }
    
    extend type Mutation {
        addFavorite(title: String!, info: String!): String!
        removeFavorite(title: String!): String!
    }
`
