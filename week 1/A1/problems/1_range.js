/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
let numBers = [];
for (i = start; i <= end; i++){
  numBers.push(i);
}
return numBers;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
