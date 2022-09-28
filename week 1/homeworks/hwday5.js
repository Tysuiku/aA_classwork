function isInside(array, ele){
    return array.indexOf(ele) > -1;
}
console.log(isInside(['chase', 'phi', 'eliot'], 'eliot')); // => true
console.log(isInside(['chase', 'phi', 'eliot'], 'fred')); // => false