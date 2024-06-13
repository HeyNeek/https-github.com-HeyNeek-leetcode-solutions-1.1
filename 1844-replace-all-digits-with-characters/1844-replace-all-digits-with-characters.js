/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let answerStr = "";
    
    for(let i = 0; i < s.length; i++){
        if(!isNaN(Number(s[i]))){
            let charCode = s.charCodeAt(i - 1) + Number(s[i]);
            
            answerStr += String.fromCharCode(charCode);
        }
        
        if(isNaN(Number(s[i]))){
            answerStr += s[i];
        }
    }
    
    return answerStr;
};