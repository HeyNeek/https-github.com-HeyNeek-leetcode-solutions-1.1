/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //catch edge cass where the string is blank
    if(s === " "){
        return 1;
    }
    
    //create map variable to keep track of the characters in the string and their position in the string
    const charMap = new Map();
    //create variable to keep track of the longest streak without a repeating character
    let longestWithoutRepeating = 0;
    //create variable to keep track of current streak without repeating a character
    let currentCount = 0;
    
    //use for loop to iterate through string
    for(let i = 0; i < s.length; i++){
        /*if the charMap doesnt have the current character, we add it to the Map with the value of its position in the string.
        if the charMap does have the current character, we assign the current index to the position of the repeated character 
        and then we clear the map of all of its key/value pairs. then right after we check to see if the currentCount is greater
        than the longestWithoutRepeating variable, if it is, we reassign it to currentCount's value then reset currentCount to zero. */
        if(!charMap.has(s[i])){
            charMap.set(s[i], i);
            currentCount++;
        }else{
            i = charMap.get(s[i]);
            charMap.clear();
            if(currentCount > longestWithoutRepeating){
                longestWithoutRepeating = currentCount;
            }
            currentCount = 0;
        }

        //this is a safety check in case the final iteration of our loop ends on a unique character and it happens to be the
        //longest currentCount streak before the loop ends, if it is we reassign the longestWithoutRepeating with the value of currentCount
        if(currentCount > longestWithoutRepeating){
            longestWithoutRepeating = currentCount;
        }
    } 
    
    //then we return longestWithoutRepeating at the end of our loop
    return longestWithoutRepeating;
};
