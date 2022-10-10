/***********************************************************************
Write a function `countRepeats(string)` that takes in a string and
returns the number of letters that appear more than once in the string.
You may assume the string contains only lowercase letters. Count the
number of letters that repeat, not the number of times they repeat in
the string.

Examples:

countRepeats('alvin'); //=> 0
countRepeats('aaaalvin'); //=> 1
countRepeats('pops'); //=> 1
countRepeats('mississippi'); //=> 3
countRepeats('hellobootcampprep'); //=> 4
***********************************************************************/
function charCount(string){
   let count = {};
   for(let i = 0; i < string.length; i++){
       let char = string[i];
         if(count[char] === undefined){
            count[char] = 1;
         } else {
            count[char]++
         }
   }
   return count;
}

function countRepeats(string) {
   let count = charCount(string);
   let numRepeats = 0;
   for(let letter in count){
       let letterCount = count[letter]

         if(letterCount > 1){
            numRepeats++;
         }
   }
   return numRepeats;
}
console.log(countRepeats('alvin')); //=> 0
console.log(countRepeats('aaaalvin')); //=> 1
console.log(countRepeats('pops')); //=> 1
console.log(countRepeats('mississippi')); //=> 3
console.log(countRepeats('hellobootcampprep')); //=> 4

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countRepeats;
