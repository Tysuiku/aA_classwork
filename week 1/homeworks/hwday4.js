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
console.log('---');

function sumArray(array){
    
}