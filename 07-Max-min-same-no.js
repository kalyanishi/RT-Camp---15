let arr = [7,7,7,7];

let Max = arr[0];
let Min = arr[0];

for(let char of arr){

    if(Max < char){
        Max = char;
    }
    
    if(Min > char){
        Min = char
    }
}
console.log(`Max : ${Max} Min : ${Min}`);