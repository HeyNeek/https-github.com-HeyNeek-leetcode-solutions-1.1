/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let letterMap = new Map();
    
    for(let i = 0; i < s.length; i++){
        if(!letterMap.has(s[i])){
            letterMap.set(s[i], 1);
        }else{
            return s[i];
        }
    }
    
};