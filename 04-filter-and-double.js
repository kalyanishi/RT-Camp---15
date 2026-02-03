// Given an array of numbers, create a new array that contains only numbers greater than 3, and each of those numbers should be multiplied by 2.

let array = [1, 2, 3, 4, 5, 6];
let result = [];

for(let no of array){
    if(no > 3 ){
        result.push(no *2);
    }
}
console.log(result);