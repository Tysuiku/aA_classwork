/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  let newArr = [];
  for(let i = 0; i < names.length; i++){
    let name = names[i];
    newArr.push((name[0] + name.split(' ')[1]).toLowerCase());
  }
  return newArr;
}
var names = [
  'Oscar Alvarez', //=> O + [Oscar,Alvarez]
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]
/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
