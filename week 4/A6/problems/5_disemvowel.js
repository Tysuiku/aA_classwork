/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  let vowels = 'aeiouAEIOU';
  let newStr = '';
  for(let i = 0; i < string.length; i++){
    let char = string[i];
    if(vowels.indexOf(char) > -1){
      continue
    } else {
      newStr += char;
    }
  }
  return newStr;
}
console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
