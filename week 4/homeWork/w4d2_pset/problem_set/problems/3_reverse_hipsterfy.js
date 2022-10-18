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
function lastVowel(word){
    let vowels = 'aeiou';
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(vowels.indexOf(char) > -1){
            return i;
        }
    }
}

function rvsHipstery(word){
    let vowels = 'aeiou';
    let lastVowelIdx = lastVowel(word);
    let newWord = '';
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(vowels.indexOf(char) > -1 || i === lastVowelIdx){
            newWord += char;
        }
    }
    return newWord;
}

function reverseHipsterfy(sentence) {
    let words = sentence.split(' ');
    let newWords = [];
    for(let i = 0; i < sentence.length; i++){
        let word = sentence[i];
        newWords.push(rvsHipstery(word));
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
