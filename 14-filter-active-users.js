let users = [
  { name: "Aman", active: true },
  { name: "Riya", active: false },
  { name: "John", active: true }
];

let activeUser = users.filter(function(user){
    return user.active === true
});
console.log(activeUser);