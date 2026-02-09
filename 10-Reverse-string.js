// Write a function that return the reverse of s string.

function reverseString(){
    let str = "kalyani";
    let result = "";

    for(let i = str.length - 1 ;i >=1;i--){
         result = result + str[i]; 
    }
    return result;
}

console.log(reverseString());
