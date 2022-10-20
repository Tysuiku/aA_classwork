//Recursion 
//a function call itself within itself
//multiply
//2 * 3 = 6
//3 + 3 = 6
// 2 + 2 + 2 = 6
//function multiply(num1, num2){
//if(num1 === 0) return 0;
//return num2 +multiply(num1 - 1, num2)
//}
//console.log(multiply(4,5)); 
//console.log(multiply(0,8));
//base case
//recursive case
//whatever can be done recursively can be done iteratively 
//why do we care about recursion?
//other profesionals use it
//elegance 
//starting algo
//searching algo
//tree 
//graph 

/* const fib = n => {
  if(n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
console.log(fib(10));
console.log(fib(9)); */

/*function factorial(num){
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(4)); */

function power(base, exponent) {
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent - 1);
};

console.log(power(2, 3));