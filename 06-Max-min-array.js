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

// Find the Maximum and Minimum Number in an Array for negative value 

let negArr = [-3, -7, -1];
let minVal =  negArr[0];
let maxVal = negArr[0];

for(let i = 1;i<negArr.length;i++){

    if(maxVal < negArr[i] ){
        maxVal = negArr[i];
    }

    if(minVal > negArr[i]){
        minVal = negArr[i];
    }
}
console.log(`Maxvalue = ${maxVal}`);
console.log(`Minvalue = ${minVal}`);

