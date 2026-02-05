// Remove duplicate values from an array without using Set.

let dupArr = [1, 2, 2, 3, 4, 4, 5];
let newArr = [];

for(let char of dupArr){
    if(!newArr.includes(char)){
        newArr.push(char);
    }
}
console.log(newArr);

// Remove duplicate values from an array without using Set.

let arr = [7, 7, 7];
let uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);









