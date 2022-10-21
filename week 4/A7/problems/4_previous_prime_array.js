/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/
function isPrime(n){
  for(let i = 2,s = Math.sqrt(n); i <= s; i++){
    if(n % i === 0){
      return false;
    }
  }
  return n > 1;
}
function primeNums(n){
  for(let i = n - 1; i >= 2; i--){
    if(isPrime(i)){
      return i;
    }
  }
}
function previousPrimeArray(array) {
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    let num = array[i];
    if(num == 2){
      newArr.push(null);
    }
    else if(isPrime(num)){
      newArr.push(primeNums(num))
    } else {
      newArr.push(num);
    }
  }
  return newArr;
}
console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]
console.log(previousPrimeArray([1, 2, 3, 4, 5]))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
