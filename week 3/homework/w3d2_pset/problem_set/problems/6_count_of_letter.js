/***********************************************************************
Write a function `countOfLetter(string, char)` that takes in a string
and a character and returns the number of times that character appears
in the string

Examples:

countOfLetter('mississippi', 's'); // => 4
countOfLetter('MISSISSIPPI', 'p'); // => 2
countOfLetter('BOOTCAMP', 't'); // => 1
***********************************************************************/

function countOfLetter(string, char) {
  let counter = 0;
  for(let i = 0; i < string.length; i++){
      let char1 = string[i].toLowerCase();
      let char2 = char.toLowerCase();
         if(char2.indexOf(char1) > -1){
            counter++
         }
  }
  return counter;
}
console.log(countOfLetter('mississippi', 's')); // => 4
console.log(countOfLetter('MISSISSIPPI', 'p')); // => 2
console.log(countOfLetter('BOOTCAMP', 't')); // => 1
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countOfLetter;
