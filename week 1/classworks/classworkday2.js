'Something'.indexOf('0'); // gives 1
if (!0){
    console.log('in if');
} else {
    console.log('out if');
}; // !0 is true so print first console

let num = 20;
if (num = 30){
    console.log('in the if');
}  else {
    console.log('out the if');
}; // prints first one 

function foo(){
    return 'bar';
}
console.log(foo()); //function invoke with ()
console.log(foo); // what it is without ()

function foo(p1, p2){
    return p1 + ' ' + p2;
} 
console.log(foo('Jon', 'Diaz'));

let foo = () => {
    return 'bar';
}

function avg(num1, num2){
    let sum = num1 + num2;
    let avg = sum / 2;
    return avg;
}

function average2 (num1, num2){
    let sum = sumNums(num1, num2)
    let avg = sum/2
    return avg;
}
function sumNums(num1, num2){
    return num1 + num2;
}