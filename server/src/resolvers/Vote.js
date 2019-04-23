function post(root, args, context) {
  return context.prisma.vote({ id: root.id }).post()
}

function user(root, args, context) {
  return context.prisma.vote({ id: root.id }).user()
}

module.exports = {
  post,
  user,
}