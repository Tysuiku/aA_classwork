function myAvg(array){
    let avg = 0;
    for(let i = 0; i < array.length; i++){
      avg += array[i]['score']  
    }
    return avg / array.length;
  }
  console.log(myAvg([{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]))