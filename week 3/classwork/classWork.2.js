Math.floor (3.8) //==> 3
Math.PI = 3.14
Math.ceil(3.8) //==> 4
Math.round(3.8) //==> 4
Math.sqrt(9) //==> 3
Math.abs(-32) //==>32

function circleArea(radius){  //area = p * r^2
    return Math.floor(Math.PI * radius * radius);
}

function weirdSqrt(num){
    return Math.floor(Math.sqrt(num)) * Math.PI;
}
console.log(weirdSqrt(9));

// Higher Order Function 
// -HOF is a function that takes order functions as arguments and returns functions 

function foo(){
    console.log ('foo');
}

function bar(fn){
    fn()
    return fn;
}

function myFunc(n){
    function myInnerFunc(){
        console.log('hello');
    }
    return myInnerFunc;
}

function ajr(fn1,fn2,fn3){
    let arr = [fn1(),fn2(),fn3()];
    let result = fn1(fn3());
    return arr[arr.length - 1];
}

//<array>.forEach are mutations
//<array>.map no mutations
//<array>.filter
//let arr = [3,5,7,11,13];
//arr.forEach(function(ele,i,arr){
//    ele = ele * 2;
//}

let nums = [1,2,3,4,5]
let arr = ['alice','bob','carol']
arr = arr.map(function(ele,i){
    return ele + ele;
});
console.log(arr)
nums = nums.filter(function(ele,i){
    return ele % 2 === 1;
})
console.log(nums)