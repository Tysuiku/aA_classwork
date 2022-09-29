function isInside(array, ele){
    return array.indexOf(ele) > -1;
}
console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false
console.log('-----------')

function reverseStr(str){
    let reverseString = '';
    for (i = str.length - 1; i >= 0; i -= 1){
         reverseString += str[i];
    }
    console.log(reverseString);
}
reverseStr('bootcamp'); //=> 'pmactoob'
reverseStr('App Academy'); //=> 'ymedacA ppA'

function luckySevens(max){
    let sevenArray = [];
    for (i = 1; i <= max; i++){
        if (i % 7 === 0){
            sevenArray.push(i);
        }
    }
    console.log(sevenArray);
}
luckySevens(25); // => [ 7, 14, 21 ]
luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function copyMachine(element, num){
    let copyMach = [];
    for (i = 0; i < num; i++){
        copyMach.push(element);
    }
    console.log(copyMach);
}
copyMachine('candy', 0); // => []
copyMachine('candy', 2); // => [ 'candy', 'candy' ]
copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

function everyOtherWord(sentence){
    let otherWord = [];
    let splitSentence = sentence.split(' ');
    for (i = 0; i < splitSentence.length; i += 2){
        otherWord.push(splitSentence[i]);
    }
    console.log(otherWord);
}
everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

/* function wordYeller(sentence){
    let wordYell = [];
    let splitStr = sentence.split(' ');
    for (i = 0; i < splitStr.length; i++){
        if (/[^A-Za-z]/.test(splitStr[i])){
            wordYell.push(splitStr[i]);
        } else {
            wordYell.push(`${splitStr[i]}!`)
        }
    } 
    console.log(wordYell);
    return wordYell.join(' ');
}; */

function wordYeller(sentence){
    
}

var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
console.log(yelledWords === "Stop! it! now! Please, wont! you! stop?"); // => true

var words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"); // => true