const id = root => root.id
const content = root => root.content
const postedBy = (root, args, context) => {
  return context.prisma.post({ id: root.id }).postedBy()
}


module.exports = {
  id,
  content,
  postedBy,
}