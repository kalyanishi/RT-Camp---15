let orders = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1000 },
  { item: "Keyboard", price: 2000 }
];

let revenue = orders.reduce(function(revenues,orders){
    return revenues + orders.price;
},0);

console.log(revenue);