const id = root => root.id
const content = root => root.content
const postedBy = (root, args, context) => {
  return context.prisma.post({ id: root.id }).postedBy()
}

function votes(parent, args, context) {
  return context.prisma.post({ id: parent.id }).votes()
}


module.exports = {
  id,
  content,
  postedBy,
  votes,
}