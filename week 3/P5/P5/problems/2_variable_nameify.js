/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/

function variableNameify(words) {
let arr = [words[0].toLowerCase()];
for (let i = 1; i < words.length; i++){
    let word = words[i];
    arr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
}
return arr.join('');
}
//console.log(variableNameify(['is', 'prime'])); //=> 'isPrime'
//console.log(variableNameify(['remove', 'last', 'vowel'])); //=> 'removeLastVowel'
//console.log(variableNameify(['MaX', 'VALUE'])); //=> 'maxValue'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
