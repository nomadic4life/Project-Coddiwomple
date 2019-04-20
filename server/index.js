const { GraphQLServer } = require('graphql-yoga');
const { Query, Mutation, Subscription, User, Post, Vote } = require('./src/resolvers')
const { prisma } = require('./src/generated/prisma-client')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Post,
  Vote,
};

const opts = {
  port: 7777,
  endpoint: '/graphql'
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
});

server.start(() => {
  console.log(
    `😄 Server running at http://localhost:4000`
  );
});