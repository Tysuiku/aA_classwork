/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
function initials(student){
  let names = student.split(' ');
  let initial = [];
  for(let i = 0; i < names.length; i++){
    let name = names[i]
    initial.push(name[0]);
  }
  return initial.join('');
}
function highestScore(students) {
  let score = 0;
  let highObj = {};
  for(let i = 0; i < students.length; i++){
    let obj = students[i];
     if(obj.score > score){
      score = obj.score 
      highObj = obj;
     } else {
      score = score;
      highObj = highObj;
     }
  }
  return initials(highObj.name) + highObj.id;
}
var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];
//console.log(highestScore(students)); //=> 'TD2'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
