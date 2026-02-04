// Remove duplicate values from an array without using Set.

let dupArr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];

for(let char of dupArr){
    if(!newArr.includes(char)){
        newArr.push(char);
    }
}
console.log(newArr);






