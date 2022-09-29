//Arrays 
/*let arr = ['c','a','t'] //elements
arr[0] = 'x'
console.log(arr); */
let str = 'cat';
str[0]= 'x';
console.log(str); // strings are immutable can't change it / arrays are mutable
let arr = ['hi', 10, 9, true, undefined, null, [1,2]];
console.log(arr)
console.log(arr[6]);
console.log(arr[6][1]);
let fruits = ['apple','orange','pear']
//fruits.length is 3
//fruits.indexOf('pear') is 2
//fruits.includes('watermelon') false .includes shows if element is in array gives back true or false
fruits.push('watermelon');
console.log(fruits);
//fruits.pop() .pop() takes off last element of array
//fruits.unshift('grape') .unshift() places elements in front of array
//fruit.shift() .shift() removes first element from array
let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(fruits.concat(numbers));
console.log(fruits);
//.slice() 


