function logBetween(lowNum, highNum){
    for (let i = lowNum; i <= highNum; i += 1){
        console.log(i);
    }
};
logBetween(-1,2);
logBetween(14,6);
console.log('---');
logBetween(4,6);
console.log('---');

function logBetweenStepper(min, max, step){
    for (let i = min; i <= max; i += step){
        console.log(i);
    }
};
logBetweenStepper(5, 9, 1);
console.log('---');
logBetweenStepper(-10, 15, 5);
console.log('---');

function printFives(max) {
    for (let i = 0; i < max; i += 5){
        console.log(i);
    }
};
printFives(20);
console.log('---');

function printReverse(min, max){
    for (let i = max - 1; i > min; i -= 1){
        console.log(i);
    }
};
printReverse(13, 18);
console.log('---');
printReverse(90, 94);
console.log('---');

function sumNums(max){
    let total = 0;
    for (let i = 1; i <= max; i += 1){
        total += i;
    }
    return total;
};
console.log(sumNums(4));
console.log(sumNums(10));
console.log(sumNums(365));
console.log('---');

function isFactorOf(number, factor){
    return (number % factor === 0);
};
console.log(isFactorOf(6, 2));
console.log(isFactorOf(-6, 2));
console.log(isFactorOf(5, 0));
console.log(isFactorOf(22, 7));
console.log('---');

function fizzBuzz(max){
    for (let i = 0; i < max; i += 1){
        if (i % 3 === 0 && i % 5 === 0){
            continue;
        }
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
};
fizzBuzz(20);
console.log('---');

function isPrime(number){
    for (let i = 2; i < number; i +=1){
        if (number % i === 0){
            return false;
        }
    }
    return true;
};
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(2017));

//------------------------------------------------------------------------------------------------------------------------------------------

function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); 
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); 

  function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); 
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); 

  function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); 
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); 

  function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); 
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); 

  function printForwards(start, end) {
    for (var counter = start; counter <= end; counter++) {
      console.log(counter);
    }
  }
  
  printForwards(4, 11); 
  function printBackwards(start, end) {
    var i = end;
    while (i >= start) {
      console.log(i);
      i--;
    }
  }
  
  printBackwards(-5, 6); 
  console.log('---');
  //-----------------------------------------------------------------------------------------------------

  function func1(num) {
    return num + 50;
  }
  
  function func2(num) {
    return num + " bottles of beer on the wall";
  }
  
  function func3(num) {
    var x = func1(num);
    return func2(x);
  }
  
  var result = func3(5);
  console.log(result); // ''55 bottles of beer on the wall''

  //---------------------------------------------------------------------------------------------------------

  var foo = function(name) {
    return "Dance " + name + ", dance! "
  }
  
  var bar = function() {
    var str = "";
  
    for (var i = 0; i < 3; i += 1) {
      str += foo("Anthony");
      str += foo("Haseeb");
      str += foo("Winnie");
      str += " | ";
    }
  
    return str;
  }
  
  var result = bar();
  console.log(result); // Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance!  | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance!  | Dance Anthony, dance! Dance Haseeb, dance! Dance Winnie, dance!  | 
  console.log('---');
  //------------------------------------------------------------------------------------------------------------------
  function sayHiNTimes(n) {
    var i = 0;
  
    while (i < n) {
      console.log("Hi");
      i += 1;
    }
  }
  sayHiNTimes(5);
  console.log('---');

  function isFive(n) {
    if (n = 5) {
      return n;
    } else {
      return 5;
    }
  }
  console.log(isFive(10));