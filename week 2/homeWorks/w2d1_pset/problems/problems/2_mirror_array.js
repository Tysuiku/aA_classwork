/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++){
    let newNum = array[i];
    newArray.push(newNum);
    } for (i = array.length - 1; i >= 0 ; i--){
    let newNum = array[i];
    newArray.push(newNum);
    }
    return newArray;
    };
    
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
