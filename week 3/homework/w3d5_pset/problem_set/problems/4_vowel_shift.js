/***********************************************************************
Write a function vowelShift(sentence) that takes in a sentence string.
The function should return a new sentence, where every vowel is replaced
with the next vowel in the alphabet.

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

vowelShift('bootcamp'); // => 'buutcemp'
vowelShift('hello world'); // => 'hillu wurld'
vowelShift('on the hunt'); // => 'un thi hant'
***********************************************************************/

function vowelShift(sentence){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newSen = '';
  
    for (let i = 0; i < sentence.length; i ++) {
      let char = sentence[i];
      let vowelIndex = vowels.indexOf(char);
  
      if (vowelIndex > -1) {
        let nextVowelIndex = (vowelIndex + 1) % 5;
  
        newSen += vowels[nextVowelIndex];
      } else {
        newSen += char;
      }
    }
  
    return newSen;
  }
console.log(vowelShift('bootcamp')); // => 'buutcemp'
console.log(vowelShift('hello world')); // => 'hillu wurld'
console.log(vowelShift('on the hunt')); // => 'un thi hant'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = vowelShift;
