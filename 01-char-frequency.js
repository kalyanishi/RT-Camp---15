let str = 'Hello';
let freq = {};

for(let char of str){

    if(freq[char]){
        freq[char] = freq[char] + 1;
    } else {
        freq[char] = 1;
    }
    
}
console.log(freq);
