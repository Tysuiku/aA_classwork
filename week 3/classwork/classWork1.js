let names = 'Bob'
function foo(){
    console.log(names);
}

function bar(){
    let test = 'math'
}
//console.log(test);  error not in scope

function foo2(){
    let something = 'this'
    for(let i = 0; i < 3; i++){
        console.log(something);
        let bar = 'food'
        console.log(bar);
    }
}
foo2();

let food = 'pizza';
function outer(){
    let food = 'sushi';
    function inner(){
        let food = 'Banana';
        console.log(food);
    }
    inner();
}
outer()
console.log(food);

/* foo()
function foo(){
    console.log('bar')
}
foo() */
/* bar()
let bar = () => {
    console.log('bar');
}
bar() */

console.log(word) 
var word = 'hello';