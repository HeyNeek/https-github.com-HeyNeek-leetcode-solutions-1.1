/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let prefixDictionary = new Map();
    let ongoingString = "";
    
    for(let i = 0; i < s.length; i++){
        ongoingString = ongoingString + s[i];
        
        prefixDictionary.set(ongoingString, 0);
    }
    
//     console.log(ongoingString);
    
//     console.log(prefixDictionary);
    
    for(let i = 0; i < words.length; i++){
        if(prefixDictionary.has(words[i])){
            prefixDictionary.set(words[i], prefixDictionary.get(words[i]) + 1);
        }
    }
    
    let totalPrefixCount = 0;
    
    for(let [key, value] of prefixDictionary){
        totalPrefixCount += value;
    }
    
    return totalPrefixCount;
};