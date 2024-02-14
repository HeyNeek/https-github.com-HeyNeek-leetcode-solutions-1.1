/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    //create variable with the word balloon for reference later
    const balloonText = "balloon";
    //create Map to store frequencies of letters in balloon
    const balloonMap = new Map();
    //create variable to store the amount of times the word balloon shows up in our string and initialize to zero
    let balloonWordCount = 0;
    
    /*
    create a for loop that iterates through the given text string and everytime stores the current letter as a key 
    and sets its value to one, if the letter key already exists in the Map we will just increment its value by 1
    */
    for(let i = 0; i < text.length; i++){
        if(!balloonMap.has(text[i])){
            balloonMap.set(text[i], 1)
        }else{
            balloonMap.set(text[i], balloonMap.get(text[i]) + 1);
        }
    }

    /*
    we setup a while loop that says while the amount of keys in our Map is zero, we go through a for loop process that iterates on
    the balloonText variable above that holds the value of "balloon". We iterate through every letter in the word "balloon" and check
    if the Map holds the letter and that the letter key has a value of greater than 1. If it does, we decrement the value of the letter 
    key by 1 and move on to the next letter. If the value is 1, we delete the letter key from the Map and move on to the next letter. If
    we no longer have the current letter we are currenly iterating on in our Map, it's time to return the balloonWordCount. Everytime the 
    for loop completes successfully, we increment the balloonWordCount by 1, because that means we were able to fully spell the word once
    with the key/value pairs in our Map.
    */
    while(balloonMap.size > 0){
       for(let i = 0; i < balloonText.length; i++){
           if(balloonMap.has(balloonText[i]) && balloonMap.get(balloonText[i]) > 1){
               balloonMap.set(balloonText[i], balloonMap.get(balloonText[i]) - 1);
           } else if(balloonMap.has(balloonText[i]) && balloonMap.get(balloonText[i]) === 1){
               balloonMap.delete(balloonText[i])
           }else{
               return balloonWordCount;
           }
       }
       balloonWordCount++;
   }

    //if the Map size is never greater than zero we go ahead and return zero
    return balloonWordCount;
};