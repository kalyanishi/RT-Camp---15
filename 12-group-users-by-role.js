let users = [
  { name: "Aman", role: "admin" },
  { name: "Riya", role: "user" },
  { name: "John", role: "admin" },
  { name: "Sara", role: "user" }
];

let admins = users.filter(user => user.role === "admin");
console.log(admins);
