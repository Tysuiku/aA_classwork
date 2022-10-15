/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

function snakeToCamel(str) {
  let newStr = str.split('_');
  let camelCase = [];
  for(let i = 0; i < newStr.length; i++){
    let char = newStr[i].toLowerCase();
    if(char !== undefined){
      camelCase.push(char[0].toUpperCase() + char.slice(1));
    }
  }
  return camelCase.join('');
}
//console.log(snakeToCamel('snakes_go_hiss')); // => 'SnakesGoHiss'
//console.log(snakeToCamel('say_hello_world')); // => 'SayHelloWorld'
//console.log(snakeToCamel('bootcamp_prep_is_cool')); // => 'BootcampPrepIsCool'
//console.log(snakeToCamel('BOOtcamp_PREP_iS_cOol')); // => 'BootcampPrepIsCool'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
