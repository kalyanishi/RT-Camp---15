// Problem: Count frequency of characters in a string
// Input: "Hello"
// Output: { h:1, e:1, l:2, o:1 }


// let str = 'aaaabbbccccddd'.toLocaleLowerCase();

// let freq = {};

// for(let char of str){

//     if(freq[char]){
//         freq[char] = freq[char] + 1;
//     } else {
//         freq[char] = 1;
//     }
    
// }
// console.log(freq);

let str1 = "mississippi".toLowerCase();
let obj1 = {};

for(let char of str1){
    if(obj1[char]){
        obj1[char] = obj1[char] + 1;
    }
    else {
        obj1[char] = 1
    }
}
console.log(obj1);