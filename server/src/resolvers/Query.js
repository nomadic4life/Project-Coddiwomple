const Users = (root, args, context, info) => {
  // for testing will remove or add some authorization for access
  // or have password not returned
  // or filter out some data before returning
  return context.prisma.users();
}

const User = (root, args, context, info) => {
  // for testing will remove or add some authorization for access
  // or have password not returned
  // or filter out some data before returning
  return context.prisma.user({
    id: args.id
  })
}

module.exports = {
  Users,
  User
}