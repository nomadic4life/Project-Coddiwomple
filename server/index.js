const { GraphQLServer } = require('graphql-yoga');

const dinnerOptions = ['🍕', '🌭', '🍔', '🥗', '🍣'];
const users = [{
  id: "1",
  username: "nomadic4life",
  password: "password1234"
},
{ id: "2",
  username: "nomadic4life",
  password: "password1234"
}];

const typeDefs = `

  type Query {
    whatsForDinner: String!
    Users: String!
  }
`;

const resolvers = {
  Query: {
    whatsForDinner: () => {
      const idx = Math.floor(Math.random() * dinnerOptions.length);
      const foodChoice = dinnerOptions[idx];
      return `Tonight we eat ${foodChoice}`;
    },
    Users: () => {
      return "users";
    }
  }
};

const opts = {
  port: 7777,
  endpoint: '/graphql'
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log(
    `😄 Server running at http://localhost:4000`
  );
});