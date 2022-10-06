//let arr = [[1,2],[2,3]]; //nested array. nested loop is a loop inside a loop

function everyCombination() {
    for (let i = 0; i < 3; i++){
        // i => 0
        console.log(`outerloop: ${i}`)
        for (let j = 0; j < 5; j++){
        console.log(`innerloop: ${j}`)
        // j => 0 , i doesnt change till all of inner for loop is finished 0,1 0,2 0,3 0,4 
           // console.log(i + ' ' + j);
        }
    }
}
everyCombination();

let students = ['Kevin', 'Jesse', 'Jason', 'Simon'];

function pairStudents(arr){
    for(let i = 0; i < arr.length; i++){
        let student1 = arr[i];
        for(let j = i ; j < arr.length; j++){
        let student2 = arr[j];
        console.log(`${student1} will be paired with ${student2}`);
        }
    }
}
pairStudents(students);

function twoSum(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log([i, j]);
            }
        }
    }
};
twoSum([0, 1, 2, 3, 4, 5, 6], 5);

let matrix = [ // matrix[0] = [1, 2, 3]
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++){
    let subArray = matrix[i];
    for (let j = 0; j < subArray.length; j++){
        let ele = matrix[i][j];
        console.log(ele);
    }
};

let geography = [
    [0, 2, 3, 0],
    [1, 4 ,3, 1],
    [1, 5, 6, 4],
    [0, 4, 3, 2]
];
function getHighestCordinateOnAPlane(plane){
    let biggest = plane[0][0];
    let currentBiggestIndex = [0,0];
    for (let i = 0; i < plane.length; i++){
        let subArray = plane[i];
        for (let j = 0; j < subArray.length; j++){
            if (subArray[j] > biggest){
                biggest = subArray[j]
                currentBiggestIndex = [i,j]
            }
        }
    }
    return currentBiggestIndex;
}
console.log(getHighestCordinateOnAPlane(geography));

let peopleArr = [
    { name: 'Ry',
      favFoods: ['Brownies','Suishi', 'Tacos']
    },
    { name: 'Brooke',
      favFoods: ['Apple','Bananas','Pears']
    }
]
function printFavoriteFood(array){
    for (let i = 0; i < array.length; i++){
        let obj = array[i]
        let arrayInObj = obj.favFoods;
        for(let j = 0; j < arrayInObj.length; j++){
            console.log(arrayInObj[j]);
        }
    }
}
printFavoriteFood(peopleArr);


