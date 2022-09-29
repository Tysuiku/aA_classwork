//Loops
//const numBer = (num) => {
    for (i = 1; i <= num; i++){
        console.log(i);
    }
    console.log('after the loop');
//}
numBer(10);

//const printRange = (start, end) => {
    for (i = start; i <= end; i++){
        console.log(i);
    }
//}
printRange(3,10);

//function printRange1(start, end){
    let i = start;
    while (i <= end){
        console.log(i);
    }
    i++;
//}
printRange1(7,21)

//let e = 20;
while (i === 20);{
console.log(i);
}

//let o = 20;
while (true);{
console.log(i);
}

//let j = 20;
while (false);{
console.log(i);
}

//const skipFive = (num) =>{
    for (let i = 1; i <= num; i++){
        if (i === 5){
            continue;
        }
    }
    console.log(i);
//}
skipFive(20);

//function breakAtFive(num){
    for (let i = 1; i <= num; i++){
        if (i === 5){
            break;
        }
    }
    console.log(i);
//}

function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    } return true;
}
console.log(11);