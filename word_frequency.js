

// Problem 1 --------------------------

// function wordFrequency(sentence){
// let words = sentence.split(" ");
// let wordCounts = {}
// for(let word of words){
//    let lowerWord = word.toLowerCase();
//    if( wordCounts.hasOwnProperty(lowerWord)){
//      wordCounts[lowerWord] ++;
//    }else{
//     wordCounts[lowerWord] = 1; 
//    }
// }
// return wordCounts ; 
// }

// const result = wordFrequency("I never ever give up , i never give up , if i have to die i will die")
// console.log(result);


// Problem 2 ------------------------

function analyzeMarks(marksObj){
  let total = 0 ;
  let count = 0 ;
  let highest =Math.max(...Object.values(marksObj));
  let lowest =Math.min(...Object.values(marksObj));
  
 for(let key in marksObj){
   total += marksObj[key] ;
   count ++;
 }
 const avarage = total / count ;
return  {total, avarage,highest} ;
}

const result = analyzeMarks({math:79,english:65,physics:88,bangla:55})

console.log(result);