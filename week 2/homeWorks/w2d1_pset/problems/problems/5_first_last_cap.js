/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
    let words = sentence.split(' ');
    let newSetence = [];
    
    for(i = 0; i < words.length; i++){
        let word = words[i];
        let firstLetter = word[0].toUpperCase();
        let lastLetter = word[word.length - 1].toUpperCase();
        let middleLetter = word.slice(1,-1).toLowerCase();
        let newWord = `${firstLetter}${middleLetter}${lastLetter}`;
        newSetence.push(newWord);
    }
    return newSetence.join(' ');
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
