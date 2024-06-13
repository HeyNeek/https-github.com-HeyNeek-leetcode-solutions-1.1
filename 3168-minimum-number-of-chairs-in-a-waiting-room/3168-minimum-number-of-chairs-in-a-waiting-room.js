/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let minimumChairCount = 0;
    let answerArr = []
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "E"){
            minimumChairCount++;
            answerArr.push(minimumChairCount);
        }
        
        if(s[i] === "L" && minimumChairCount !== 0){
            minimumChairCount--;
            answerArr.push(minimumChairCount);
        }
        
        console.log("chair count: " , minimumChairCount)
    }
    
    return Math.max(...answerArr);
};