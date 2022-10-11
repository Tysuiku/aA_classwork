/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  let ele = [];
  let counter = 0;
  for(key in count){
    for(let i = 0; i < count[key]; i++){
      if (count[key] > 0){
        ele.push(key);
      }
    }
}
return ele;
}
//console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
//console.log(arrayBuilder({})); //=> []
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
