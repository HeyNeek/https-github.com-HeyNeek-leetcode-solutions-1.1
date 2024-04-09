/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let currentSubstr = "";
    let longestSubstr = "";
    
    for(let i = 0; i < num.length; i++){
        currentSubstr = currentSubstr + num[i];
        
        if(num[i] !== num[i + 1] || currentSubstr.length > 2){
            if(Number(currentSubstr) > Number(longestSubstr) && currentSubstr.length === 3){
                longestSubstr = currentSubstr;
            }
            
            if(longestSubstr === "" && currentSubstr.length === 3){
                longestSubstr = currentSubstr;
            }
            
            currentSubstr = "";
        }
    }
    
    return longestSubstr;
};