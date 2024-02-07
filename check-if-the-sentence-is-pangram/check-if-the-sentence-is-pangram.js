/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    //check that the length of the sentence string is even capable of having the entire alphabet
     if(sentence.length < 26){
        return false;
    }
    
    //make new Set object with the sentence string
    const dictionary = new Set(sentence);
    
    //create array to iterate through with each letter of the alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    /*
    loop through entire alphabet array and check if the dictionary doesnt have the current letter in the alphabet
    array. If it is missing any letter in the alphabet array, we immediately return false.
    */
    for(let i = 0; i < alphabet.length; i++){
        if(!dictionary.has(alphabet[i])){
            return false;
        }
    }
    
    //if none of the conditional statements above return false, its safe to say its true
    return true;
};