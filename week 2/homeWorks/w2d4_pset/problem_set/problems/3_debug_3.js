// Debug this function below so it passes mocha

// Examples:
//
// var people = [
//   { happiness : 15},
//   { happiness : 13},
//   { happiness : 3},
//   { happiness : 20},
//   { happiness : 9},
//   { happiness : 7},
//   { happiness : 17},
//   { happiness : 1}
// ];
//
// isHappyGroup(people) //=> true;

function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    var people = group[i];
    for (let j = 0; j < people.length; j++){
      let person = people[j];
      if (isHappy[person]) {
        amount += 1;
      }
    }
  }

  if (amount > 5) {
    return true;
  }

  return false;
}
var people = [
    { happiness : 15},
    { happiness : 13},
    { happiness : 3},
    { happiness : 20},
    { happiness : 9},
    { happiness : 7},
    { happiness : 17},
    { happiness : 1}
  ];
  
   console.log(isHappyGroup(people)) //=> true;


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = isHappyGroup;
