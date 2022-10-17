/***********************************************************************
Write a function threeUniqueVowels(string) that takes in a string and
returns true if the string contains at least three different vowels.

Vowels are a, e, i, o, u

Examples:

threeUniqueVowels('delicious'); // => true
threeUniqueVowels('bootcamp prep'); // => true
threeUniqueVowels('bootcamp'); // => false
threeUniqueVowels('dog'); // => false
threeUniqueVowels('go home'); // => false
***********************************************************************/

function threeUniqueVowels(string) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let i = 0; i < vowels.length; i++){
        if(string.indexOf(vowels[i]) > -1){
            count++
        } 
        }
        return (count >= 3);
    }
    
console.log(threeUniqueVowels('delicious')); // => true
console.log(threeUniqueVowels('bootcamp prep')); // => true
console.log(threeUniqueVowels('bootcamp')); // => false
console.log(threeUniqueVowels('dog')); // => false
console.log(threeUniqueVowels('go home')); // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = threeUniqueVowels;
