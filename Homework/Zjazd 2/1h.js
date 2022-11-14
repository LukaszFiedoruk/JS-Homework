// With  a given start value of 0. Iterate the array and add even items and subtract odd ones. 
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];

let oddNumbers = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

let evenNumbers = numbers.filter(function(item) {
    return (item % 2 === 0);
 });

function sum(evenNumbers){
   let order = 0;
for (let i in evenNumbers) {
   
   order += evenNumbers[i];
}
return order;
}

console.log(sum(evenNumbers));

function sum(oddNumbers){
    let order = 0;
 for (let i in oddNumbers) {
    
    order -= oddNumbers[i];
 }
 return order;
}
console.log(sum(oddNumbers));