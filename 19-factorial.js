// Write a function that calculate factorial of a given number.

function factorial(num){
    let result = 1;
    for(let i = 1;i<=num;i++){

        result = result * i;
    }
    return result;

};
let result1 = factorial(3);
console.log(result1)