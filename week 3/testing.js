function sameCharCollapse(str) {
    let char = str.split('');
    console.log(char)
    for(let i = 0; i < char.length - 1; i++){
        if(char[i] = char[i+1]){
            char[i]='';
            char[i+1]='';
        }
    }
    str = char.join('');
    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv