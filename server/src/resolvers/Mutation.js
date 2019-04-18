
const addUser = (parent, args) => {
    const user = {
    id: `user-${idCount++}`,
    username: args.username,
    password: args.password,
  }
  users.push(user)
  return user
}

module.exports = {
  addUser
}