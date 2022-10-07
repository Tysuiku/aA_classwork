/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  let i = 1;
  let gcm;

  while(i < num1 && i <num2){
    if(num1 % i === 0 & num2 % i === 0){
      gcm = i;
    }
    i++
  }
  return gcm;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
console.log(greatestCommonFactor(15, 25)); //=> 5
console.log(greatestCommonFactor(16, 24)); //=> 8
console.log(greatestCommonFactor(7, 11));//=> 1