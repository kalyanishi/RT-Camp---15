//  Find the second largest number in an array without sorting.

function calculateArea (length,width){
    if(length <= 0){
        throw new RangeError("Length should be grater than 0")
    }

    if(width <= 0){
        throw new RangeError("Width should be more than 0");
    }

    const area = length*width;
    console.log(area);
}
calculateArea(40,2);
calculateArea(-7,9);

