// Find the Maximum and Minimum Number in an Array

let arr = [1,2,3,4,5,6,7];

let min = arr[0];
let max = arr[0];

for(let num of arr){
    if(max < num){
        max = num;
    }else if(min > num){
        min = num;
    }
}
console.log(`{ Min : ${min}, Max : ${max}}`);
