/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

function fromMeToYou(sentence) {
let words = sentence.split(' ');
let newWords = [];
for (i = 0; i < words.length; i++){
let word = words[i];
if (word === 'me'){
  newWords.push('you');
} else {
  newWords.push(word);
}
}
return newWords.join(' ');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fromMeToYou;
