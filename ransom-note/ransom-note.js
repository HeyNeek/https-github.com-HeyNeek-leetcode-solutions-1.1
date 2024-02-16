/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomMap = new Map();
    const magazineMap = new Map();
    
    console.log(ransomNote);
    console.log(magazine);
    
    for(let i = 0; i < ransomNote.length; i++){
        if(!ransomMap.has(ransomNote[i])){
            ransomMap.set(ransomNote[i], 1);
        }else{
            ransomMap.set(ransomNote[i], ransomMap.get(ransomNote[i]) + 1);
        }
    }
    
    for(let i = 0; i < magazine.length; i++){
        if(!magazineMap.has(magazine[i])){
            magazineMap.set(magazine[i], 1);
        }else{
            magazineMap.set(magazine[i], magazineMap.get(magazine[i]) + 1);
        }
    }
    
    let canRansomNoteBeConstructed = true;
    
    console.log("ransomMap: ", ransomMap);
    console.log("magazineMap: ", magazineMap);
    
    for(const [key, value] of ransomMap){
        console.log("ransomMap's key/value pair -> " + key + ": " + value);
         console.log("magazineMap's key/value pair -> " + key + ": " + magazineMap.get(key));
        
        if(!magazineMap.has(key)){
            canRansomNoteBeConstructed = false;
        }
        
        if(magazineMap.get(key) !== ransomMap.get(key) && magazineMap.get(key) < ransomMap.get(key)){
            canRansomNoteBeConstructed = false;
        }
        
    }
    
    return canRansomNoteBeConstructed;
};