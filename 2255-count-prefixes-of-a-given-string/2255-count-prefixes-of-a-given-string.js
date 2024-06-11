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
    
    let totalPrefixCount = 0;
    
    for(let i = 0; i < words.length; i++){
        if(prefixDictionary.has(words[i])){
            totalPrefixCount += 1;
        }
    }
    
    return totalPrefixCount;
};