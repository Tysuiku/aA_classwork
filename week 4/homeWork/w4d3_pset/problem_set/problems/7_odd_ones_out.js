/***********************************************************************
Write a function oddOnesOut(array) that takes in an array of strings and
returns a new array array containing only elements that appeared an even
number of times in the input array.

Examples:

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
oddOnesOut(arr1); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
oddOnesOut(arr2); // => [ 'fish' ]
***********************************************************************/
function newObj(arr){
    let obj = {};
    for(let ele of arr){
        if(obj[ele] === undefined){
            obj[ele] = 1;
        } else {
            obj[ele] += 1;
        }
    }
    return obj;
}

function oddOnesOut(array) {
    let newArr = [];
    let obj = newObj(array);
    for(let ele in obj){
        if(obj[ele] % 2 === 0){
            newArr.push(ele);
        }
    }
    return newArr;
}
var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]

var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = oddOnesOut;
