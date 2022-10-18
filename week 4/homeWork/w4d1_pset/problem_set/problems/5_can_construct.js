/***********************************************************************
Given an arbitrary ransom note string and another string containing letters 
from all the magazines, write a function that will return true if the ransom note 
can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Examples:
canConstruct("a", "b");               // => false
canConstruct("a", "aa");              // => true
canConstruct("ababc", "dbaccab");     // => true
canConstruct("aabbc", "aaaabbbdef");  // => false
***********************************************************************/

function eleCount(str) {
    const count = {};
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] in count) {
        count[str[i]]++;
      } else {
        count[str[i]] = 1;
      }
    }
  
    return count;
  }
  

  function canConstruct(ransomNote, magazine) {     // "aabbc"    mag="aabccd"
    const magCount = eleCount(magazine);            // {a: 2, b: 1, c: 2, d: 1}
    const noteCount = eleCount(ransomNote);         // {a: 2, b: 2, c: 2}
  
    for (let char in noteCount) {
      const numLetters = noteCount[char];
  
      if (magCount[char] === undefined || magCount[char] < numLetters) {
        return false;
      }
    }
  
    return true;
  }
console.log(canConstruct("a", "b"));               // => false
console.log(canConstruct("a", "aa"));              // => true
console.log(canConstruct("ababc", "dbaccab"));     // => true
console.log(canConstruct("aabbc", "aaaabbbdef"));  // => false
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = canConstruct;
