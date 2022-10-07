//strings are primitive non-mutable
// arrays are non primitive mutable
let str = 'hello'
str[0] = 'x'
console.log(str);
let arr = ['h','e','l','l','o']
arr[0] = 'x';
console.log(arr);
console.log(arr.join('++'));
console.log(str.split(''));
function foo(bar){
    let n = 0;
    let sum = 0;
    for(let key in bar){
        n++;
    }
}

// console.log(bootcamp); // reference error
// 'hello world'.join('-') // .join is a array method
// undefinded.length // reference error
// let num = 20; // syntax error
// num.length
