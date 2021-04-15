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
        addFavorite(info: String!): String!
        removeFavorite(info: String!): String!
    }
`
