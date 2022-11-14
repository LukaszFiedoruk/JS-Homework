// Create a function that takes in an array of numbers and returns sum of first and last element
let myArray = [1,6,23,8,4,8,3,7]; 
function sum2(myArray) {
    let sum=0;
    let last =0;
    for(i=1; i<myArray.length; i++) {
        last = [i];
        sum = myArray[0] + myArray[last];
    }
    return sum;
   
}
console.log(sum2(myArray));