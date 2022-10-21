/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/
function isPrime(n){
  for(let i = 2,s = Math.sqrt(n); i <= s; i++){
    if(n % i === 0){
      return false;
    }
  }
  return n > 1;
}
function numberPrimes(n) {
  let counter = 0;
  for(let i = 2; i <= n; i++){
    if(isPrime(i)){
      counter++
    }
  }
  return counter;
}
console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
