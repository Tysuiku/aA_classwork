/***********************************************************************
Write a function `smallestPrime(array)` that takes in an array of
numbers and returns the smallest prime number in the array.

HINTS:
- start by creating an `isPrime` helper function
- the smallest prime number is 2

Examples:

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
smallestPrime(arr1); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
smallestPrime(arr2); // => 7

var arr3 = [];
smallestPrime(arr3); // => null

var arr4 = [4, 6, 8, 10];
smallestPrime(arr4); // => null
***********************************************************************/
function isPrime(n){
    if (n < 2){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
function smallestPrime(array) {
    let smallest = null;
  
    for (let i = 0; i < array.length; i += 1) {
      let num = array[i];
  
      if (isPrime(num) && (num < smallest || smallest === null)) {
        smallest = num;
      }
    }
  
    return smallest;
  }
var arr1 = [ 6, 7, 12, 11, 5, 4 ];
console.log(smallestPrime(arr1)); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7

var arr3 = [];
console.log(smallestPrime(arr3)); // => null

var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = smallestPrime;
