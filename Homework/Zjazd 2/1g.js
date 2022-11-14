// Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
 let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];


let oddNumbers = numbers.filter(function(item) {
   return (item % 2 !== 0);
});

function sum(oddNumbers){
   let order = 0;
for (let i in oddNumbers) {
   
  order += oddNumbers[i];
}
return order;
}

console.log(sum(oddNumbers));

