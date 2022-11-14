// Create a function that checks if a given number is a prime number

function primeNumber(num) {
    let prime = num != 1;
    for(let i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
   }
console.log(primeNumber(25));