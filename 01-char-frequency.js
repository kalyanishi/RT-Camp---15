// Problem: Count frequency of characters in a string
// Input: "Hello"
// Output: { h:1, e:1, l:2, o:1 }


let str = 'aaaabbbccccddd'.toLocaleLowerCase();

let freq = {};

for(let char of str){

    if(freq[char]){
        freq[char] = freq[char] + 1;
    } else {
        freq[char] = 1;
    }
    
}
console.log(freq);
