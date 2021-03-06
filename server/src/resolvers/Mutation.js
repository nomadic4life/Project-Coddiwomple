const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, authenticateUser } = require('../utils')


const createUser = async (root, args, context) => {

  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
 
  return {
    token,
    user,
  }
}

const connectUser = async (root, args, context) => {
  const user = await context.prisma.user({ username: args.username });
  if (!user) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  }
}

const post = (root, args, context) => {
  const userId = authenticateUser(context);

  return context.prisma.createPost({
    content: args.content,
    postedBy: { connect: { id: userId } },
  });
}

const vote = async (root, args, context, info) => {
  const userId = authenticateUser(context)
  const postExists = await context.prisma.$exists.vote({
    user: { id: userId },
    post: { id: args.postId },
  })

  if (postExists) {
    throw new Error(`Already voted for post: ${args.postId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    post: { connect: { id: args.postId } },
  })
}

module.exports = {
  createUser,
  connectUser,
  post,
  vote,
}