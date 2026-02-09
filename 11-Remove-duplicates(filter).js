let arr = [1,2,3,1,2,3,4,5];
// let uniqArr = [];

let uniqArr = arr.filter((ele, index) => {
    return index === arr.indexOf(ele);
       
});
console.log(uniqArr);