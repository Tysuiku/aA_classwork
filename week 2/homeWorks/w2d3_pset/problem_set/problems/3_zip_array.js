/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.

Examples:

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/

function zipArray(arr1, arr2) {
    let zipedArray = [];
    for (let i = 0; i < arr1.length; i++){
        let ele1 = arr1[i];
        let ele2 = arr2[i];
        let pair = [ele1,ele2];
        zipedArray.push(pair);
    }
    return zipedArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = zipArray;
