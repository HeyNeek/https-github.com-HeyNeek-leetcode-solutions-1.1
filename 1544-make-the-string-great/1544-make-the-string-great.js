/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stringArr = s.split("");
    
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i]?.toLowerCase() === stringArr[i + 1] && stringArr[i] !== stringArr[i + 1]){
            stringArr.splice(i, 2);
            i = -1;
        }
        
        if(stringArr[i]?.toUpperCase() === stringArr[i + 1] && stringArr[i] !== stringArr[i + 1]){
            stringArr.splice(i, 2);
            i = -1;
        }
    }
    
    if(stringArr.length > 0){
        return stringArr.join("")
    }
    
    return ""
};