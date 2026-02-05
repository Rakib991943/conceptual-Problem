

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

// function analyzeMarks(marksObj){
//   let total = 0 ;
//   let count = 0 ;
// //   let highest =Math.max(...Object.values(marksObj));
// //   let lowest =Math.min(...Object.values(marksObj));
// let highest = -Infinity ;
// let lowest = Infinity ; 

//  for(let key in marksObj){
//    total += marksObj[key] ;
//    count ++;
//    if(marksObj[key]> highest){
//     highest= marksObj[key];
//    }if(marksObj[key]<lowest){
//       lowest = marksObj[key];
//    }
//  }

//  const avarage = total / count ;
// return  {total, avarage,highest,lowest} ;
// }

// const result = analyzeMarks({math:79,english:65,physics:88,bangla:55})

// console.log(result);


// Problem 3 

function passwordCheck(pasword){
    let reasons = [];
     let length = pasword.length ;
     let hasUpperLatter = false ; 
     let hasNumber = false ;
     let hasSpace = pasword.includes(" ");
     for(let letter of pasword){
        if(letter >= '0' && letter <='9'){
            hasNumber = true;
        }if(letter >="A"  && letter >="Z"){
            hasUpperLatter = true ;
        }
     }

     if(!hasUpperLatter){
        reasons.push("Misining the UpperCase")
     };
     if(!hasNumber){
        reasons.push("Misining the Number")
     };
    if(length<=8){
        reasons.push("Character must be 8 Character")
    }
    if(hasSpace){
        reasons.push("Remove the Space ")
    }
     let isValid ;
     if( reasons.length===0){
        isValid = true ;
     }else{
        isValid = false ; 
     }
   return{
    valid : isValid,
    reasons
   }
}

const result = passwordCheck("hell5oWorld");
console.log(result);