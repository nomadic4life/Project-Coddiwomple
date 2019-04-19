
const id = root => root.id
const username = root => root.username
const posts = (root, args, context) => {
  return context.prisma.user({ id: root.id }).post()
}

module.exports = {
  id,
  username,
  posts,
}