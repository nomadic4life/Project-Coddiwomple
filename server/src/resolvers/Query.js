const users = [{
  id: "user-1",
  username: "nomadic4life",
  password: "password1234"
},
{ 
  id: "user-2",
  username: "Mutiny",
  password: "destroy"
}];

const Users = () => {
  return users;
}

const User = (_, {id}) => {
  const user = users.find(x => x.id === id);
  if (!user) {
    throw new Error('Cannot find your todo!');
  }
  return user;
}

module.exports = {
  Users,
  User
}