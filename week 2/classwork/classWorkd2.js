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
    for (let i = 2; i < num; i++){
    if (num % i === 0){
     return false;
    }
} 
return true;
};

function laligatSum(number){
    let primes = 0;
    for (let i = 2; i <= number; i++){
        if(isPrime(i)){
         primes += i; 
        }
    }
    return primes;
};
console.log(laligatSum(10)); // => 2+3+5+7 => 17
console.log(laligatSum(17)); // => 2+3+5+7+11+13+17 =>58
 
let cat = {
    name: 'whiskers',
    color: 'blue',
    toys: {
        outside: ['ball', 'whistle'],
        inside: ['blanket']
    }
}

cat ['name'] = 'Jael';
cat ['age'] = 21;
console.log(cat); // logs whole obj
console.log(cat['color']); // logs blue cuz cat key color is blue
console.log(cat.name); // logs cats name
console.log(cat.age); // logs cats age
console.log(cat.toys); // logs all cats toys
console.log(cat.toys.outside); // logs cats outside key of toys
console.log(cat.test); // undef since key doesnt exists

let test = 'name';
console.log(cat[test]); // jael name of cat
console.log(cat.test); // undef cuz its not looking for key of test 

function printObject(obj){
    for (let key in obj){
        console.log(key);
    }
}

printObject(cat);
