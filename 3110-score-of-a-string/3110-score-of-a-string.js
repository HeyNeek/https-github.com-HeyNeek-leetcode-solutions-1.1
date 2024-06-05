/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let runningSum = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i + 1]){
            runningSum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
        }
    }
    
    return runningSum;
};