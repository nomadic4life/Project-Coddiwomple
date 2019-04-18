const { GraphQLServer } = require('graphql-yoga');
const { Query, Mutation, Users } = require('./src/resolvers')

const resolvers = {
  Query,
  Mutation,
  Users
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