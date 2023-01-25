function QuestionsMarks(str) { 
    // code goes here  
  
    let arr = Array.from(str)
    let num = 0, count = 0;
  
    for (let i = 0; i < arr.length; i++){
      if (isNaN(arr[i]) === false) {
        num = arr[i];
        console.log(num)
        for (let j = (i + 1); j > i; j++){
          if (arr[j] == '?' && isNaN(arr[j +1])){
            count++
           // continue;
            }else count = 0
          if (count >= 3){num += arr[j + 1]}
        }
    }
  }
  return (num >= 10) ? true : false
  }
     
  // keep this function call here 
  console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));