function wordFrequncy(sentence){
    let wordCount={};
let words = sentence.split(" ");
for(let word of words){
    let wordLowerCase = word.toLowerCase();
   if(wordCount.hasOwnProperty(wordLowerCase)){
    wordCount[wordLowerCase] ++ ;
   }
   else{
    wordCount[wordLowerCase] =1 
   }
}
return wordCount ; 
}

const result = wordFrequncy("I love JS and I love coding and JS is fun Fun")
console.log(result);