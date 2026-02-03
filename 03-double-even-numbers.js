let arr = [1,2,3,4,5];
let result= [];

for(let ele of arr){
    if(ele % 2==0){
        result.push(ele*ele);
    }
    else{
        result.push(ele);
    }
    
}
console.log(result);
