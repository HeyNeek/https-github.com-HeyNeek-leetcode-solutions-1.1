/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let arrayOfDistances = []
    
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j < s.length; j++){
            if(s[i] === s[j]){
                arrayOfDistances.push(j - (i + 1));
            }
        }
    }
    
    
    if(arrayOfDistances.length > 0){
      return Math.max(...arrayOfDistances);   
    }
    
    return -1;
};
