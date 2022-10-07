/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/
function removeLastVowel(word){
    let vowels = 'aeiou'.split('');

        for(let i = word.length - 1; i >= 0; i--){
            let char = word[i];
            if(vowels.indexOf(char) > -1){
                let newWord= word.slice(0,i) + word.slice(i + 1);
                return newWord;
            }
        }
    return word;
}
console.log(removeLastVowel(panther));


function hipsterfy(sentence) {
    let words = sentence.split(' ');
    let hipWords = []
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let hipWord = removeLastVowel(word);
        hipWords.push(hipWord);
    }
    return hipWords.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = hipsterfy;
