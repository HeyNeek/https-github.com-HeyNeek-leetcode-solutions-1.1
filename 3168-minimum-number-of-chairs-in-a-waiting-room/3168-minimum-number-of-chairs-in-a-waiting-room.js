/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let minimumChairCount = 0;
    let arrayOfChairCounts = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "E"){
            minimumChairCount++;
            arrayOfChairCounts.push(minimumChairCount);
        }
        
        if(s[i] === "L" && minimumChairCount !== 0){
            minimumChairCount--;
            arrayOfChairCounts.push(minimumChairCount);
        }
    }
    
    return Math.max(...arrayOfChairCounts);
};