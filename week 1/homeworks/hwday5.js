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

function wordYeller(sentence) {
    let yelledWords = [];
  
    let words = sentence.split(" ");
    let punctuation = ". , ! ? ; :".split(" "); 
  
    for (i = 0; i < words.length; i++) {
      let word = words[i];
      let lastCharacter = word.slice(-1);
  
      if (punctuation.indexOf(lastCharacter) !== -1) { 
        yelledWords.push(word);
      } else {                                        
        yelledWords.push(word + "!");
      }
    }
  
    return yelledWords.join(" ");
  }

var sent = "Stop it now! Please, wont you stop?";
var yelledWords = wordYeller(sent);
console.log(yelledWords === "Stop! it! now! Please, wont! you! stop?"); // => true

var words = "Go to the store and grab the following: milk, bread, run, and cake";
console.log(wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"); // => true

function arraySubstring(words, str){
    let strArray = [];
    for (i = 0; i < words.length; i++){
        let word = words[i];
        if (word.indexOf(str) !== -1){
            strArray.push(true);
        } else {
            strArray.push(false);
        }
    }
    return strArray;
}
console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));
// => [true, false, true, true]
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"));
// => [true, false, false, true]

function evenCaps(sentence){
        let newSentence = '';
    for (i = 0; i < sentence.length; i++){
        let char = sentence[i];
    if (i % 2 === 0){
        let capChar = char.toUpperCase();
        newSentence += capChar;
    } else {
        newSentence += char;
    }
    }
    return newSentence;
}
console.log(evenCaps("Tom got a small piece of pie"));
// => "ToM GoT A SmAlL PiEcE Of pIe"
console.log(evenCaps("the book is in front of the table"));
// => "ThE BoOk iS In fRoNt oF ThE TaBlE"