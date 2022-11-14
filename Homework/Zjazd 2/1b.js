let myArray = [1,6,23,8,4,8,3,7]; 
// Create a function that takes in an array of numbers and returns sum of all elements
function sum(myArray){
    let order = 0;
for (let i in myArray) {
   order += myArray[i];
}
return order;
}

console.log( sum(myArray));