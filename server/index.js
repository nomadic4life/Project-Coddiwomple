const { GraphQLServer } = require('graphql-yoga');
const { Query, Mutation, User } = require('./src/resolvers')

const resolvers = {
  Query,
  Mutation,
  User
};

const opts = {
  port: 7777,
  endpoint: '/graphql'
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => {
  console.log(
    `😄 Server running at http://localhost:4000`
  );
});