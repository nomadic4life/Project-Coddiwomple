const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

// async function signup(parent, args, context, info) {
//   const password = await bcrypt.hash(args.password, 10)
//   const user = await context.prisma.createUser({ ...args, password })

//   const token = jwt.sign({ userId: user.id }, APP_SECRET)

//   return {
//     token,
//     user,
//   }
// }

// async function login(parent, args, context, info) {
//   const user = await context.prisma.user({ email: args.email })
//   if (!user) {
//     throw new Error('No such user found')
//   }

//   const valid = await bcrypt.compare(args.password, user.password)
//   if (!valid) {
//     throw new Error('Invalid password')
//   }

//   const token = jwt.sign({ userId: user.id }, APP_SECRET)

//   return {
//     token,
//     user,
//   }
// }

// async function vote(parent, args, context, info) {
//   const userId = getUserId(context)
//   const linkExists = await context.prisma.$exists.vote({
//     user: { id: userId },
//     link: { id: args.linkId },
//   })
//   if (linkExists) {
//     throw new Error(`Already voted for link: ${args.linkId}`)
//   }

//   return context.prisma.createVote({
//     user: { connect: { id: userId } },
//     link: { connect: { id: args.linkId } },
//   })
// }

// module.exports = {
//   post,
//   signup,
//   login,
//   vote,
// }

const users = [{
  id: "user-1",
  username: "nomadic4life",
  password: "password1234"
},
{ id: "user=2",
  username: "Mutiny",
  password: "destroy"
}];

let idCount = users.length;


const createUser = (parent, args) => {
    const user = {
    id: `user-${idCount++}`,
    username: args.username,
    password: args.password,
  }
  users.push(user)
  return user
}

const connectUser = (parent, args) => {
  const user = users.find(user => user.username === args.username );
  return user
}

module.exports = {
  createUser,
  connectUser
}