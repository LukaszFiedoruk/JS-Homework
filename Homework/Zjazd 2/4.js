// 4.	Create a function that takes in a n (number) as a parameter and 
// returns first n Fibonacci numbers - use recursion

function  fibonacci(n)  {
        let f = new Array(n+2); 
        let i;
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++)
        {
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }

    
    console.log(fibonacci(6));
     
