require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const { types } = require("./types");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({
  types,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
