function logEach(array){
for (i = 0; i < array.length; i += 1){
    console.log(`${i}:${array[i]}`);
}

};
logEach(["Anthony", "John", "Carson"]);
console.log('---');

function range(start, end){
    let array = [];
    for (i = start; i <= end; i += 1){
    array.push(i);
    }
    console.log(array);
}
range(1, 4);
range(4,2);
console.log('---');

function sumArray(array){
    let num = 0;
    for (i = 0; i < array.length; i ++){
        num += array[i];
    }
    console.log(num);
}
sumArray([5, 6, 4]); 
sumArray([7, 3, 9, 11]); 

const capWords = (words) => {
    let returnArry = [];
    for (i = 0; i < words.length; i++){
        returnArry.push(words[i].toUpperCase());
    }
    console.log(returnArry);
}
capWords(['hello', 'boOtCaMp', 'PREP!']);

const wordPeriods = (sentence) => {
    let Periods = sentence.split(' ');
    let returnPeriods = ''
    for (i = 0; i < Periods.length; i++){
        returnPeriods += `${Periods[i]}. `;
    } 
    console.log(returnPeriods);
}
wordPeriods('hello world'); 
wordPeriods('what is the weather today'); 

function maxValue(array){
    let Maximum = null;
    for (i = 0; i < array.length; i++){
        if (array[i] > Maximum) {
            Maximum = array[i];
        }
    }
    console.log(Maximum);
}
maxValue([12, 6, 43, 2]); // => 43
maxValue([]); // => null
maxValue([-4, -10, 0.43]); // => 0.43

function myIndexOf(array, target){
    let indexOf = 0;
    for (let i = 0; i < array.length; i++){
        if (target === array[i]){
          indexOf = i;
          return console.log(indexOf)
        }
    } 
    return console.log(-1)
}
myIndexOf([1,2,3,4],4) // => 3
myIndexOf([5,6,7,8],2) // => -1

function factorArray(array, number){
    let factorOfArray = []
    for (i = 0; i < array.length; i++){
        if (number % array[i] === 0){
            factorOfArray.push(array[i]);
        }
    }
    console.log(factorOfArray)
}
factorArray([2,3,4,5,6],20) //=> [2,4,5]
factorArray([2,3,4,5,6],35) //=> [5]
factorArray([10,15,20,25],5) //=> []

//--------------------------------------------------------------------------------------------------------
function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);
  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);
  function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);
  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);
  function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);
  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);
  function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);
  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);
  function printForwards(arr) {
    for (var i = 0; i < arr.length; i++) {
      var ele = arr[i];
      console.log(ele);
    }
  }
  
  var alphabet = ['a', 'b', 'c', 'd', 'e'];
  printForwards(alphabet);
  function printBackwards(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var ele = array[i];
      console.log(ele);
    }
  }
  
  var names = ['kurstie', 'mike', 'alex', 'meagan'];
  printBackwards(names);