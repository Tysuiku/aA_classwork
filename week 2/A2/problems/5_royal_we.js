/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
let words = sentence.split(' ');
let newSentence = [];
  for (i = 0; i < words.length; i++){
    let word = words[i];
    if (word === 'I'){
      newSentence.push('we');
    } else if (word === 'mine'){
      newSentence.push('ours');
    } else if (word === 'my'){
      newSentence.push('our');
    } else if (word === 'me'){
      newSentence.push('us');
    } else {
      newSentence.push(word);
    }
  }
  return newSentence.join(' ');
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
