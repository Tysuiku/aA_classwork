// Data Modeling 
// Q: What is at the heart of computer science?
// A: How we represent our information!!!
// Ex: Array[], Objects {}, trees,etc ...
let arr = [1,2,3,4,5];
//* use arrays to store ordered colletion of elements
let student = ['alice', 'female', '63'];
// to get the students name ..... student[0] student gender ..... student[1]
//Q: How could we store the student's info more effiectively?
//A: let student = {name: 'akice', gender: 'female'.........} with an object
//Now to get name, instead of students[0] we use student['name'] or student.name
let names = ['alice', 'bob', 'carol', 'dave'];
//Take Away: If your data needs to be ordered then use a array otherwise use an object! 
//(in some cases ... you'll figure out as you code)

//How should we model these? (i.e array or object?)
// 1) student 2) class of students) 3) car 4) parking lot
// 1: object  2: array of objects  3: object  4: array of objects 

let student1 = { name: 'jon', 'grade': 2};
let student2 = { name: 'sam', 'grade': 4};
let student3 = { name: 'joe', 'grade': 12};

let class1 = [student1, student2, student3];
console.log(class1);
for(let student of class1){
    console.log(student)
}

//list = ['rex','tim','ana']
//for( let i of list){
//    console.log(i)
//}
function initials(student){
    let names = student.split(' ');
    let initial = '';
    for(let i = 0; i < student.length; i++){
      let name = student[i]
      initials += name[0];
    }
    return initial;
  }