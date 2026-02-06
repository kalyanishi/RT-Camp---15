// Write a function that finds and prints the smallest number among three given numbers.

function checkSmallestNo(a,b,c){
    
    if(a < b && a<c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else {
        return c;
    }

}
let check = checkSmallestNo(2,5,7);
console.log(check)