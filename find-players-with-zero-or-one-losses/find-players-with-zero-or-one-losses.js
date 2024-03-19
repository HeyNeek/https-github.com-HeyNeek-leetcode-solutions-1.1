/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
/*
    one map
    one answer array to return(two dimensional array)
    
    map is populated with players, and how much they lost
    
    push in two arrays into answer arrays based on results
    first array is players with zero losses
    second array is players with one loss
*/
var findWinners = function(matches) {
    let answerArr = [];
    let playerMap = new Map();
    
    for(let i = 0; i < matches.length; i++){
        if(!playerMap.has(matches[i][0])){
            playerMap.set(matches[i][0], 0);
        }
        
        if(!playerMap.has(matches[i][1])){
            playerMap.set(matches[i][1], 1);
        }else{
            playerMap.set(matches[i][1], playerMap.get(matches[i][1]) + 1);
        }
    }
    
    let noLossArr = [];
    let oneLossArr = [];
    
    for(let [key, value] of playerMap){
        if(value === 0){
            noLossArr.push(key);
        }
        
        if(value === 1){
            oneLossArr.push(key);
        }
    }
    
    answerArr.push(noLossArr.sort((a,b) => a-b));
    answerArr.push(oneLossArr.sort((a,b) => a-b));
    
    return answerArr;
};