/***********************************************************************
Write a function `reverseHipsterfy(sentence)` that takes in a sentence
and removes all vowels, except the last vowels of every word.

Examples:

reverseHipsterfy("proper"); // => 'prper'
reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'
***********************************************************************/
function lastVowelIdx(word){
    let vowels = 'aeiou';
    for(let i = word.length - 1; i >= 0; i--){
        let char = word[i];
        if(vowels.indexOf(char) > -1){
            return i;
        }
    }
}
//console.log(lastVowelIdx('proper'))
function reverseHipWord(word){
    let vowels = 'aeiou';
    let newWord = '';
    for(i = 0; i < word.length; i++){
        let char = word[i];
        if(vowels.indexOf(char) === -1 || lastVowelIdx(word) === i){
            newWord += char;
        }
    }
    return newWord;
}
//console.log(reverseHipWord('proper'))
function reverseHipsterfy(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        newWords.push(reverseHipWord(word));
    }
    return newWords.join(' ');
}
console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = reverseHipsterfy;
