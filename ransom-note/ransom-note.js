/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //create two maps, one to store the letter/frequency key/value pairs for ransomNote, one for magazineMap
    const ransomMap = new Map();
    const magazineMap = new Map();
    
    //then we iterate through ransomNote and fill out the ransomMap
    for(let i = 0; i < ransomNote.length; i++){
        if(!ransomMap.has(ransomNote[i])){
            ransomMap.set(ransomNote[i], 1);
        }else{
            ransomMap.set(ransomNote[i], ransomMap.get(ransomNote[i]) + 1);
        }
    }
    
    //then we iterate through magazineMap and fill out the magazineMap
    for(let i = 0; i < magazine.length; i++){
        if(!magazineMap.has(magazine[i])){
            magazineMap.set(magazine[i], 1);
        }else{
            magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
        }
    }
    
    //this is a boolean value that defaults to true to return, which we will use to determine
    //if the ransomNote can be constructed from the magazine
    let canRansomNoteBeConstructed = true;
    
    /*we iterate through ransomMap and we first check if magazineMap even has the current key
    we are on. If not, we will immediately change the value to false and return it.*/
    for(const [key, value] of ransomMap){ 
        if(!magazineMap.has(key)){
            canRansomNoteBeConstructed = false;
            return canRansomNoteBeConstructed;
        }
        
        if(magazineMap.get(key) !== ransomMap.get(key) && magazineMap.get(key) < ransomMap.get(key)){
            canRansomNoteBeConstructed = false;
        }
        
    }
    
    return canRansomNoteBeConstructed;
};