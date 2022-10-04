function catBuilder1(name, color, toys){
    let cat = {}
    cat.name = name
    cat.color = color
    cat.toys = toys
}
function catBuilder2(name, color, toys){
    let cat = {}
    cat["name"] = name
    cat["color"] = color // we can key in objects when they are strings
    cat["toys"] = toys
}
function catBuilder3(name, color, toys){
    let cat = {
    name: name,
    color: color,
    toys: toys,
    }
    return cat
}
// Function Decomp/Objects
/* Breaks down a problem into several functions
CLEAN CODE
MANAGE COMPLEXITY
*/
//laligatSum(num) and returns the sum of all the prime numbers less
// than or equal to that number.
// laligatSum(10) => 2+3+5+7 => 17
// laligatSum(17) => 2+3+5+7+11+13+17 =>58
function isPrime(num){
if (num < 2) {
    return false;
}
    for (i = 2; i < num; i++){
    if (num % i === 0){
     return false;
    }
} 
return true;
};

function laligatSum(number){
    let primes = 0;
    for (i = 2; i <= number; i++){
        if(isPrime(i)){
         primes += i; 
        }
    }
    return primes;
};
console.log(laligatSum(10)); // => 2+3+5+7 => 17
console.log(laligatSum(17)); // => 2+3+5+7+11+13+17 =>58

