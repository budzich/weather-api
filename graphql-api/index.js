require('dotenv').config();

const {ApolloServer} = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const models = require('./models');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {models},
  introspection: true,
  playground: true,
});

server.listen({port: process.env.PORT || 4000}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
